import type React from "react";
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
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
