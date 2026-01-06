import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { FieldErrors, FieldNamesMarkedBoolean, Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type { RequestCreateFormData } from "../FormSchema";
import { getDataByCategories, getPaginatedData, dataCategories, allMockData } from "../data/mockData";
import type { DataItem, DataFilter } from "../data/mockData";
import DataTable from "../components/DataTable";
import FilterModal from "../components/FilterModal";
import Pagination from "../../global/Pagination";

interface RequestedDataStepProps {
    control: Control<RequestCreateFormData>;
    errors: FieldErrors<RequestCreateFormData>;
    showErrors: boolean;
    touchedFields: Partial<FieldNamesMarkedBoolean<RequestCreateFormData>>;
}

const ITEMS_PER_PAGE = 10;

const RequestedDataStep: React.FC<RequestedDataStepProps> = ({ 
    control, 
    errors, 
    showErrors, 
    touchedFields 
}) => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPage, setSelectedPage] = useState(1);
    const [filterName, setFilterName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDataItem, setSelectedDataItem] = useState<DataItem | null>(null);

    const { field } = useController({
        name: "requestedData",
        control,
        defaultValue: [],
    });

    const { field: categoriesField } = useController({
        name: "selectedCategories",
        control,
        defaultValue: [],
    });

    const { field: filtersField } = useController({
        name: "dataFilters",
        control,
        defaultValue: {},
    });

    const filtersAsMap = new Map<string, DataFilter>(
        Object.entries(filtersField.value || {}) as [string, DataFilter][]
    );

    const selectedCategories = categoriesField.value || [];
    const selectedIds = field.value || [];

    const shouldShowError = () => {
        return (showErrors || touchedFields.requestedData) && errors.requestedData;
    };

    const handleCategoryToggle = (category: "hardware" | "software") => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c: string) => c !== category)
            : [...selectedCategories, category];
        categoriesField.onChange(newCategories);
        setCurrentPage(1);
    };

    const handleRowClick = (item: DataItem) => {
        setSelectedDataItem(item);
        setIsModalOpen(true);
    };

    const handleSelectedRowClick = (item: DataItem) => {
        setSelectedDataItem(item);
        setIsModalOpen(true);
    };

    const handleSelectItem = (itemId: string) => {
        if (!selectedIds.includes(itemId)) {
            field.onChange([...selectedIds, itemId]);
        }
    };

    const handleApplyFilter = (filter: DataFilter) => {
        const currentFilters = filtersField.value || {};
        filtersField.onChange({
            ...currentFilters,
            [filter.dataItemId]: filter,
        });
    };

    const handleClearFilter = (dataItemId: string) => {
        const currentFilters = filtersField.value || {};
        const { [dataItemId]: _, ...remainingFilters } = currentFilters;
        filtersField.onChange(remainingFilters);
    };

    const handleRemoveSelectedItem = (itemId: string) => {
        field.onChange(selectedIds.filter((id: string) => id !== itemId));
        const currentFilters = filtersField.value || {};
        const { [itemId]: _, ...remainingFilters } = currentFilters;
        filtersField.onChange(remainingFilters);
    };

    const availableData = getDataByCategories(selectedCategories)
        .filter(item => !selectedIds.includes(item.id))
        .filter(item =>
            filterName === "" || item.name.toLowerCase().includes(filterName.toLowerCase())
        );

    const selectedItems = allMockData.filter(item => selectedIds.includes(item.id));

    const { items: paginatedItems, totalPages, totalItems } = getPaginatedData(
        availableData,
        currentPage,
        ITEMS_PER_PAGE
    );

    const { 
        items: paginatedSelectedItems, 
        totalPages: selectedTotalPages, 
        totalItems: selectedTotalItems 
    } = getPaginatedData(
        selectedItems,
        selectedPage,
        ITEMS_PER_PAGE
    );

    const handleSelectionChange = (newSelectedIds: string[]) => {
        field.onChange(newSelectedIds);
    };

    const activeFiltersCount = Array.from(filtersAsMap.values()).filter(f => {
        return !!(
            f.textContains ||
            f.textEquals ||
            f.numberMin !== undefined ||
            f.numberMax !== undefined ||
            f.numberEquals !== undefined ||
            f.dateFrom ||
            f.dateTo ||
            f.dateEquals ||
            (f.selectedOptions && f.selectedOptions.length > 0)
        );
    }).length;

    return (
    <>
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {t("requestCreate.form.dataScope")} <span className="text-text-error">*</span>
                </h3>
            </div>

            <div className="flex flex-wrap gap-4">
                {dataCategories.map(category => (
                    <label
                        key={category.id}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                            selectedCategories.includes(category.id)
                                ? "border-primary bg-primary/5"
                                : "border-border-light hover:border-primary/50"
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                            className="w-5 h-5 text-primary focus:ring-primary rounded"
                        />
                        <span className="text-text-primary font-medium">
                            {t(category.labelKey)}
                        </span>
                    </label>
                ))}
            </div>

            {selectedCategories.length > 0 && (
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary mb-2">
                        {t("requestCreate.form.filterByName")}
                    </label>
                    <input
                        type="text"
                        value={filterName}
                        onChange={(e) => {
                            setFilterName(e.target.value);
                            setCurrentPage(1);
                        }}
                        placeholder={t("requestCreate.form.filterByNamePlaceholder")}
                        className="px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all w-full"
                    />
                </div>
            )}

            {selectedCategories.length > 0 ? (
                <>
                    <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-3">
                            {t("requestCreate.form.availableData")}
                        </h4>
                        {availableData.length > 0 ? (
                            <>
                                <DataTable
                                    data={paginatedItems}
                                    selectedItems={selectedIds}
                                    onSelectionChange={handleSelectionChange}
                                    onRowClick={handleRowClick}
                                    filters={filtersAsMap}
                                />

                                <div className="mt-4">
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        totalItems={totalItems}
                                        itemsPerPage={ITEMS_PER_PAGE}
                                        onPageChange={setCurrentPage}
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="p-6 text-center text-text-muted border border-border-light rounded-lg bg-bg-muted">
                                {t("requestCreate.form.allDataSelected")}
                            </div>
                        )}
                    </div>

                    {selectedItems.length > 0 && (
                        <div className="pt-6 border-t border-border-light">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                <h4 className="text-sm font-semibold text-text-primary">
                                    {t("requestCreate.form.selectedData")}
                                </h4>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-text-muted">
                                        {t("requestCreate.form.selectedCount", { count: selectedItems.length })}
                                    </span>
                                    {activeFiltersCount > 0 && (
                                        <span className="text-sm text-primary font-medium">
                                            {t("requestCreate.form.activeFiltersCount", { count: activeFiltersCount })}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <DataTable
                                data={paginatedSelectedItems}
                                selectedItems={selectedIds}
                                onSelectionChange={handleSelectionChange}
                                onRowClick={handleSelectedRowClick}
                                filters={filtersAsMap}
                                mode="selected"
                                onRemove={handleRemoveSelectedItem}
                            />
                            <div className="mt-4">
                                <Pagination
                                    currentPage={selectedPage}
                                    totalPages={selectedTotalPages}
                                    totalItems={selectedTotalItems}
                                    itemsPerPage={ITEMS_PER_PAGE}
                                    onPageChange={setSelectedPage}
                                />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="p-6 text-center text-text-muted border border-border-light rounded-lg bg-bg-muted">
                    {t("requestCreate.form.selectCategoryFirst")}
                </div>
            )}

            {shouldShowError() && (
                <span className="text-text-error text-sm">{errors.requestedData?.message}</span>
            )}
        </div>

        <FilterModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            dataItem={selectedDataItem}
            currentFilter={selectedDataItem ? filtersAsMap.get(selectedDataItem.id) || null : null}
            onApplyFilter={handleApplyFilter}
            onClearFilter={handleClearFilter}
            isNewItem={selectedDataItem ? !selectedIds.includes(selectedDataItem.id) : false}
            onSelectItem={handleSelectItem}
        />
    </>
    );
};

export default RequestedDataStep;
