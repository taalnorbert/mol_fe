import type React from "react";
import { useTranslation } from "react-i18next";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems: number;
    itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    itemsPerPage,
}) => {
    const { t } = useTranslation();

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPageNumbers = (): (number | "...")[] => {
        const pages: (number | "...")[] = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push("...");
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            pages.push(totalPages);
        }

        return pages;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-border-light">
            <div className="text-sm text-text-muted">
                {t("requestCreate.form.pagination.showing", {
                    start: startItem,
                    end: endItem,
                    total: totalItems,
                })}
            </div>

            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentPage === 1
                            ? "text-text-muted cursor-not-allowed"
                            : "text-text-primary hover:bg-bg-muted"
                    }`}
                    aria-label={t("requestCreate.form.pagination.previous")}
                >
                    ←
                </button>

                {getPageNumbers().map((page, index) =>
                    page === "..." ? (
                        <span
                            key={`ellipsis-${index}`}
                            className="px-3 py-2 text-text-muted"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            type="button"
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                currentPage === page
                                    ? "bg-primary text-white"
                                    : "text-text-primary hover:bg-bg-muted"
                            }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    type="button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentPage === totalPages
                            ? "text-text-muted cursor-not-allowed"
                            : "text-text-primary hover:bg-bg-muted"
                    }`}
                    aria-label={t("requestCreate.form.pagination.next")}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default Pagination;
