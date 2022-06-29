import { Box, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App1 from './applications/app1';
import App2 from './applications/app2';
// import from applications
import Dashboard from './applications/dashboard';
// import from contexts
import { AlertMessageProvider } from './contexts/alert-message';
import Headbar from './layouts/headbar';
// import from layouts
import Sidebar from './layouts/sidebar';

const theme = createTheme();

function App() {
  // webapp layout settings
  const sidebarWidth = 260;

  const styles = {
    contentWrapper: {
      marginLeft: `${sidebarWidth}px`,
      padding: theme.spacing(4),
    },

    contentContainer: {
      maxWidth: 1000,
      width: '100%',
      margin: 'auto',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar sidebarWidth={sidebarWidth} />
        <Headbar sidebarWidth={sidebarWidth} />
        <Toolbar />

        <Box sx={styles.contentWrapper}>
          <Box sx={styles.contentContainer}>
            <AlertMessageProvider>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/app1" element={<App1 />} />
                <Route path="/app2" element={<App2 />} />
              </Routes>
            </AlertMessageProvider>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
