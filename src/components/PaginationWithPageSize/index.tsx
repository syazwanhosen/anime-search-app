import React from 'react';
import {
    TablePagination,
    Box,
} from '@mui/material';

import { PaginationProps } from '../../types';


const PaginationWithPageSize: React.FC<PaginationProps> = ({
    totalRecords,
    page,
    rowsPerPage,
    onPageChange,
    onTableRowsPerPageChange,
}) => {
    return (
        <Box display="flex" justifyContent="flex-end" alignItems="center" mt={2}>
            <TablePagination
                component="div"
                count={totalRecords}
                page={page}
                onPageChange={onPageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={onTableRowsPerPageChange}
                rowsPerPageOptions={[5, 10, 15, 20, 25]} // the configured for size limit is '25' from the API
                labelDisplayedRows={({ from, to, count }) => `Showing ${from}–${to} of ${count}`}
                showFirstButton
                showLastButton
            />

        </Box>
    );
};

export default PaginationWithPageSize;
