import { createTheme } from '@mui/material/styles';
import { grey, indigo, deepOrange, cyan } from '@mui/material/colors';
import { faIR } from '@mui/material/locale';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: indigo[600],
            light: indigo[300],
            dark: indigo[900],
            contrastText: grey[100],
        },
        secondary: {
            main: deepOrange[600],
            light: deepOrange[300],
            dark: deepOrange[900],
            contrastText: grey[100],
        },
        info: {
            main: cyan[500],
            light: cyan[300],
            dark: cyan[900],
            contrastText: grey[50],
        },
        background: {
            default: grey[900],
            paper: grey[800],
        },
        text: {
            primary: grey[100],
            secondary: grey[200],
            disabled: grey[400],
        },
    },
    shape: {
        borderRadius: 15,
    },
    typography: {
        fontFamily: 'Vazir',
    },
}, faIR);
