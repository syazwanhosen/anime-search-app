import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#06479E',
            contrastText: '#ffffff',
            light: '#E3F2FC'
        },
        success: {
            main: '#388E3C',
            light: '#E8F5E9',
        },
        error: {
            main: '#C62828',
            light: '#FFEBEE',
        },
        warning: {
            main: '#EF6C00',
            light: '#FFF3E0',
        }
    },
});

export default theme;
