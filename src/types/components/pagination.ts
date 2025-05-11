export interface PaginationProps {
    totalRecords: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: unknown, newPage: number) => void;
    onTableRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}