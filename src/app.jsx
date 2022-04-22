import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import from layouts
import Sidebar from './layouts/sidebar';
import Headbar from './layouts/headbar';

// import from contexts
import { AlertMessageProvider } from './contexts/alert-message';

// import from applications
import Dashboard from './applications/dashboard';
import App1 from './applications/app1';
import App2 from './applications/app2';


function App() {

  // webapp layout settings
  const sidebarWidth = 260;

  const useStyles = makeStyles((theme) => ({
    contentWrapper: {
      marginLeft: `${sidebarWidth}px`,
      padding: theme.spacing(4),
    },

    contentContainer: {
      maxWidth: 1000,
      width: '100%',
      margin: 'auto',
    },
  }));

  const classes = useStyles();

  return (
    <Router>
      <Sidebar sidebarWidth={sidebarWidth} />
      <Headbar sidebarWidth={sidebarWidth} />
      <Toolbar />

      <div className={classes.contentWrapper}>
        <div className={classes.contentContainer}>
          <AlertMessageProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/app1" element={<App1 />} />
              <Route path="/app2" element={<App2 />} />
            </Routes>
          </AlertMessageProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
