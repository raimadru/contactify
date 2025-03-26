import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          width: '905px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: '#2196F3',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '6px 16px',
        },
        head: {
          padding: '6px 16px',
        },
        body: {
          padding: '6px 16px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: '54px',
        },
      },
    },
  },
});
