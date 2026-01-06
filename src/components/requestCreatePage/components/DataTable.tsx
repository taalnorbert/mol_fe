import type React from "react";
import { useTranslation } from "react-i18next";
import type { DataItem, DataFilter } from "../data/mockData";

type TableMode = "available" | "selected";

interface DataTableProps {
    data: DataItem[];
    selectedItems: string[];
    onSelectionChange: (selectedIds: string[]) => void;
    onRowClick: (item: DataItem) => void;
    filters: Map<string, DataFilter>;
    mode?: TableMode;
    onRemove?: (itemId: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({
    data,
    selectedItems,
    onSelectionChange,
    onRowClick,
    filters,
    mode = "available",
    onRemove,
}) => {
    const { t } = useTranslation();

    const handleCheckboxToggle = (e: React.MouseEvent, itemId: string) => {
        e.stopPropagation();
        if (selectedItems.includes(itemId)) {
            onSelectionChange(selectedItems.filter(id => id !== itemId));
        } else {
            onSelectionChange([...selectedItems, itemId]);
        }
    };

    const handleSelectAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentPageIds = data.map(item => item.id);
        const allSelected = currentPageIds.every(id => selectedItems.includes(id));

        if (allSelected) {
            onSelectionChange(selectedItems.filter(id => !currentPageIds.includes(id)));
        } else {
            const newSelection = [...new Set([...selectedItems, ...currentPageIds])];
            onSelectionChange(newSelection);
        }
    };

    const hasFilter = (itemId: string): boolean => {
        const filter = filters.get(itemId);
        if (!filter) return false;
        return !!(
            filter.textContains ||
            filter.textEquals ||
            filter.numberMin !== undefined ||
            filter.numberMax !== undefined ||
            filter.numberEquals !== undefined ||
            filter.dateFrom ||
            filter.dateTo ||
            filter.dateEquals ||
            (filter.selectedOptions && filter.selectedOptions.length > 0)
        );
    };

    const isAllSelected = data.length > 0 && data.every(item => selectedItems.includes(item.id));
    const isSomeSelected = data.some(item => selectedItems.includes(item.id)) && !isAllSelected;
    const isSelectedMode = mode === "selected";

    if (data.length === 0) {
        return (
            <div className="p-8 text-center text-text-muted border border-border-light rounded-lg bg-bg-muted">
                {t("requestCreate.form.dataTable.noData")}
            </div>
        );
    }

    return (
        <div className={`border rounded-lg overflow-hidden ${isSelectedMode ? "border-primary/30 bg-primary/5" : "border-border-light"}`}>
            <table className="w-full">
                <thead className={`border-b ${isSelectedMode ? "bg-primary/10 border-primary/20" : "bg-bg-muted border-border-light"}`}>
                    <tr>
                        {!isSelectedMode && (
                            <th className="w-12 p-3 text-left">
                                <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    ref={(el) => {
                                        if (el) el.indeterminate = isSomeSelected;
                                    }}
                                    onChange={() => {}}
                                    onClick={handleSelectAll}
                                    className="w-5 h-5 text-primary focus:ring-primary rounded cursor-pointer"
                                    aria-label={t("requestCreate.form.dataTable.selectAll")}
                                />
                            </th>
                        )}
                        <th className="p-3 text-left text-sm font-semibold text-text-primary">
                            {t("requestCreate.form.dataTable.nameColumn")}
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-text-primary hidden sm:table-cell">
                            {t("requestCreate.form.dataTable.descriptionColumn")}
                        </th>
                        <th className={`p-3 text-center ${isSelectedMode ? "w-24" : "w-12"}`}>
                            <span className="sr-only">{t("requestCreate.form.dataTable.actions")}</span>
                        </th>
                    </tr>
                </thead>
            </table>
            <div className="max-h-[240px] overflow-y-auto">
                <table className="w-full">
                    <tbody>
                    {data.map((item, index) => {
                        const isSelected = selectedItems.includes(item.id);
                        const itemHasFilter = hasFilter(item.id);
                        return (
                            <tr
                                key={item.id}
                                className={`border-b last:border-b-0 transition-colors cursor-pointer ${
                                    isSelectedMode 
                                        ? `border-primary/10 ${index % 2 === 0 ? "bg-white/50" : "bg-primary/5"} hover:bg-primary/10`
                                        : `border-border-light ${isSelected ? "bg-primary/5" : index % 2 === 0 ? "bg-white" : "bg-bg-muted/30"} hover:bg-primary/10`
                                }`}
                                onClick={() => onRowClick(item)}
                            >
                                {!isSelectedMode && (
                                    <td className="w-12 p-3">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => {}}
                                            onClick={(e) => handleCheckboxToggle(e, item.id)}
                                            className="w-5 h-5 text-primary focus:ring-primary rounded cursor-pointer"
                                        />
                                    </td>
                                )}
                                <td className="p-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-text-primary">
                                            {item.name}
                                        </span>
                                        {itemHasFilter && (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                {t("requestCreate.form.dataTable.filtered")}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-text-muted mt-1 sm:hidden">
                                        {item.description}
                                    </div>
                                </td>
                                <td className="p-3 text-sm text-text-secondary hidden sm:table-cell">
                                    {item.description}
                                </td>
                                <td className={`p-3 ${isSelectedMode ? "w-24" : "w-12"}`}>
                                    <div className="flex items-center justify-center gap-1">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onRowClick(item);
                                            }}
                                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                                itemHasFilter
                                                    ? "text-primary bg-primary/10 hover:bg-primary/20"
                                                    : "text-text-muted hover:text-primary hover:bg-primary/10"
                                            }`}
                                            title={t("requestCreate.form.dataTable.openFilter")}
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                            </svg>
                                        </button>
                                        {isSelectedMode && onRemove && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onRemove(item.id);
                                                }}
                                                className="p-1.5 rounded-lg text-text-muted hover:text-text-error hover:bg-bg-error transition-colors cursor-pointer"
                                                title={t("requestCreate.form.dataTable.remove")}
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
