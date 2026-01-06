import type React from "react";
import type { DataItem, DataFilter } from "../data/mockData";
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
declare const FilterModal: React.FC<FilterModalProps>;
export default FilterModal;
