import type React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { DataItem, DataFilter, FilterType } from "../data/mockData";
import Button from "../../global/Button";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataItem: DataItem | null;
    currentFilter: DataFilter | null;
    onApplyFilter: (filter: DataFilter) => void;
    onClearFilter: (dataItemId: string) => void;
    isNewItem?: boolean;
    onSelectItem?: (itemId: string) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
    isOpen,
    onClose,
    dataItem,
    currentFilter,
    onApplyFilter,
    onClearFilter,
    isNewItem = false,
    onSelectItem,
}) => {
    const { t } = useTranslation();
    const [textContains, setTextContains] = useState("");
    const [textEquals, setTextEquals] = useState("");
    const [numberMin, setNumberMin] = useState<string>("");
    const [numberMax, setNumberMax] = useState<string>("");
    const [numberEquals, setNumberEquals] = useState<string>("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateEquals, setDateEquals] = useState("");
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    useEffect(() => {
        if (currentFilter && dataItem && currentFilter.dataItemId === dataItem.id) {
            setTextContains(currentFilter.textContains || "");
            setTextEquals(currentFilter.textEquals || "");
            setNumberMin(currentFilter.numberMin?.toString() || "");
            setNumberMax(currentFilter.numberMax?.toString() || "");
            setNumberEquals(currentFilter.numberEquals?.toString() || "");
            setDateFrom(currentFilter.dateFrom || "");
            setDateTo(currentFilter.dateTo || "");
            setDateEquals(currentFilter.dateEquals || "");
            setSelectedOptions(currentFilter.selectedOptions || []);
        } else {
            resetForm();
        }
    }, [currentFilter, dataItem]);

    const resetForm = () => {
        setTextContains("");
        setTextEquals("");
        setNumberMin("");
        setNumberMax("");
        setNumberEquals("");
        setDateFrom("");
        setDateTo("");
        setDateEquals("");
        setSelectedOptions([]);
    };

    const handleApply = () => {
        if (!dataItem) return;

        if (isNewItem && onSelectItem) {
            onSelectItem(dataItem.id);
        }

        const filter: DataFilter = {
            dataItemId: dataItem.id,
            filterType: dataItem.filterConfig.type,
        };

        switch (dataItem.filterConfig.type) {
            case "text":
                if (textContains) filter.textContains = textContains;
                if (textEquals) filter.textEquals = textEquals;
                break;
            case "number":
                if (numberMin) filter.numberMin = Number(numberMin);
                if (numberMax) filter.numberMax = Number(numberMax);
                if (numberEquals) filter.numberEquals = Number(numberEquals);
                break;
            case "date":
                if (dateFrom) filter.dateFrom = dateFrom;
                if (dateTo) filter.dateTo = dateTo;
                if (dateEquals) filter.dateEquals = dateEquals;
                break;
            case "select":
                if (selectedOptions.length > 0) filter.selectedOptions = selectedOptions;
                break;
        }

        onApplyFilter(filter);
        onClose();
    };

    const handleClear = () => {
        if (!dataItem) return;
        onClearFilter(dataItem.id);
        resetForm();
        onClose();
    };

    const handleOptionToggle = (option: string) => {
        setSelectedOptions(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen || !dataItem) return null;

    const renderFilterContent = (filterType: FilterType) => {
        switch (filterType) {
            case "text":
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                {t("requestCreate.form.filterModal.textContains")}
                            </label>
                            <input
                                type="text"
                                value={textContains}
                                onChange={(e) => setTextContains(e.target.value)}
                                placeholder={t("requestCreate.form.filterModal.textContainsPlaceholder")}
                                className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                {t("requestCreate.form.filterModal.textEquals")}
                            </label>
                            <input
                                type="text"
                                value={textEquals}
                                onChange={(e) => setTextEquals(e.target.value)}
                                placeholder={t("requestCreate.form.filterModal.textEqualsPlaceholder")}
                                className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
                    </div>
                );

            case "number":
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                {t("requestCreate.form.filterModal.numberEquals")}
                            </label>
                            <input
                                type="number"
                                value={numberEquals}
                                onChange={(e) => setNumberEquals(e.target.value)}
                                placeholder={t("requestCreate.form.filterModal.numberEqualsPlaceholder")}
                                className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    {t("requestCreate.form.filterModal.numberMin")}
                                </label>
                                <input
                                    type="number"
                                    value={numberMin}
                                    onChange={(e) => setNumberMin(e.target.value)}
                                    placeholder={t("requestCreate.form.filterModal.numberMinPlaceholder")}
                                    className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    {t("requestCreate.form.filterModal.numberMax")}
                                </label>
                                <input
                                    type="number"
                                    value={numberMax}
                                    onChange={(e) => setNumberMax(e.target.value)}
                                    placeholder={t("requestCreate.form.filterModal.numberMaxPlaceholder")}
                                    className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>
                        </div>
                    </div>
                );

            case "date":
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                                {t("requestCreate.form.filterModal.dateEquals")}
                            </label>
                            <input
                                type="date"
                                value={dateEquals}
                                onChange={(e) => setDateEquals(e.target.value)}
                                className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    {t("requestCreate.form.filterModal.dateFrom")}
                                </label>
                                <input
                                    type="date"
                                    value={dateFrom}
                                    onChange={(e) => setDateFrom(e.target.value)}
                                    className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    {t("requestCreate.form.filterModal.dateTo")}
                                </label>
                                <input
                                    type="date"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                    className="w-full px-4 py-3 border border-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>
                        </div>
                    </div>
                );

            case "select":
                return (
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-text-primary">
                            {t("requestCreate.form.filterModal.selectOptions")}
                        </label>
                        <div className="max-h-[200px] overflow-y-auto space-y-2 border border-border-light rounded-lg p-3">
                            {dataItem.filterConfig.options?.map(option => (
                                <label
                                    key={option}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                                        selectedOptions.includes(option)
                                            ? "bg-primary/10 border border-primary"
                                            : "hover:bg-bg-muted border border-transparent"
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => handleOptionToggle(option)}
                                        className="w-4 h-4 text-primary focus:ring-primary rounded"
                                    />
                                    <span className="text-sm text-text-primary">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const hasActiveFilter = () => {
        if (!currentFilter || currentFilter.dataItemId !== dataItem.id) return false;
        switch (dataItem.filterConfig.type) {
            case "text":
                return !!(currentFilter.textContains || currentFilter.textEquals);
            case "number":
                return !!(currentFilter.numberMin || currentFilter.numberMax || currentFilter.numberEquals);
            case "date":
                return !!(currentFilter.dateFrom || currentFilter.dateTo || currentFilter.dateEquals);
            case "select":
                return !!(currentFilter.selectedOptions && currentFilter.selectedOptions.length > 0);
            default:
                return false;
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden animate-fadeIn">
                <div className="px-6 py-4 border-b border-border-light bg-bg-muted">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-text-primary">
                                {t("requestCreate.form.filterModal.title")}
                            </h2>
                            <p className="text-sm text-text-muted mt-1">
                                {dataItem.name}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-bg-muted transition-colors text-text-muted hover:text-text-primary cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="px-6 py-5 overflow-y-auto max-h-[calc(90vh-180px)]">
                    {dataItem.filterConfig.type === "none" ? (
                        <div className="text-center py-8 text-text-muted">
                            {t("requestCreate.form.filterModal.noFiltersAvailable")}
                        </div>
                    ) : (
                        renderFilterContent(dataItem.filterConfig.type)
                    )}
                </div>

                <div className="px-6 py-4 border-t border-border-light bg-bg-muted flex flex-col sm:flex-row gap-3 justify-end">
                    {hasActiveFilter() && (
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={handleClear}
                            className="order-3 sm:order-1"
                        >
                            {t("requestCreate.form.filterModal.clearFilter")}
                        </Button>
                    )}
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                        className="order-2"
                    >
                        {t("requestCreate.form.filterModal.cancel")}
                    </Button>
                    {dataItem.filterConfig.type !== "none" && (
                        <Button
                            type="button"
                            variant="primary"
                            onClick={handleApply}
                            className="order-1 sm:order-3"
                        >
                            {t("requestCreate.form.filterModal.apply")}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
