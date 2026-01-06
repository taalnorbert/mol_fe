export type FilterType = "text" | "number" | "date" | "select" | "none";
export interface FilterConfig {
    type: FilterType;
    options?: string[];
}
export interface DataItem {
    id: string;
    name: string;
    description: string;
    category: "hardware" | "software";
    filterConfig: FilterConfig;
    sampleData: SampleRecord[];
}
export interface SampleRecord {
    id: string;
    value: string | number | Date;
    personName: string;
}
export interface DataCategory {
    id: "hardware" | "software";
    labelKey: string;
}
export interface DataFilter {
    dataItemId: string;
    filterType: FilterType;
    textContains?: string;
    textEquals?: string;
    numberMin?: number;
    numberMax?: number;
    numberEquals?: number;
    dateFrom?: string;
    dateTo?: string;
    dateEquals?: string;
    selectedOptions?: string[];
}
export declare const dataCategories: DataCategory[];
export declare const allMockData: DataItem[];
export declare const getDataByCategories: (categories: ("hardware" | "software")[]) => DataItem[];
export declare const getPaginatedData: (data: DataItem[], page: number, itemsPerPage: number) => {
    items: DataItem[];
    totalPages: number;
    totalItems: number;
};
export declare const getDataItemById: (id: string) => DataItem | undefined;
