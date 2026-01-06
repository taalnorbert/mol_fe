import type React from "react";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems: number;
    itemsPerPage: number;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
