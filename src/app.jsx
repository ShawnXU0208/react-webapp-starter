import { Box, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// import { SnackbarProvider } from 'material-ui-snackbar-provider';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BuyItems from './applications/buy-items';
// import from applications
import Dashboard from './applications/dashboard';
import Profile from './applications/profile';
import SellItems from './applications/sell-items';
import Services from './applications/services';
// import from contexts
import { AlertMessageProvider } from './contexts/alert-message';
// import from layouts
import Sidebar from './layouts/sidebar';
import Topbar from './layouts/topbar';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Stack direction="row" sx={{ height: '100%' }}>
          <Sidebar />
          <Box
            sx={{
              flexGrow: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              transition: theme.transitions.create('flex-grow', {
                easing: theme.transitions.easing.sharp,
                duration: 5000,
              }),
            }}
          >
            <Topbar />
            <Box sx={{ background: theme.palette.background, height: '100%', padding: theme.spacing(2) }}>
              <AlertMessageProvider>
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/buy" element={<BuyItems />} />
                  <Route path="/sell" element={<SellItems />} />
                  <Route path="/services" element={<Services />} />
                </Routes>
              </AlertMessageProvider>
            </Box>
          </Box>
        </Stack>
      </Router>
    </ThemeProvider>
  );
}

export default App;
