import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: '#F3F5F8',
    body: '#5F6165',
    white: 'white',
  },
  typography: {
    title: {
      fontFamily: 'DM Sans',
      fontSize: '24px',
      lineHeight: '31px',
      fontWeight: 700,
      color: '#1F2128',
      whiteSpace: 'nowrap',
    },
    subtitle: {
      fontFamily: 'DM Sans',
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: 500,
      color: '#5F6165',
      whiteSpace: 'nowrap',
    },
    body: {
      fontFamily: 'DM Sans',
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: 400,
      color: '#5F6165',
    },
  },
  props: {
    // Name of the component ⚛️
    MuiListItemButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export default theme;
