import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PropTypes } from 'prop-types';
import React from 'react';

import iconImage from '../assets/logo.png';

function Headbar(props) {
  const theme = useTheme();

  const styles = {
    headbar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.background.paper,
      color: 'black',
    },

    toolbar: {
      padding: 0,
      borderBottom: `1px solid ${theme.palette.grey['300']}`,
      justifyContent: 'space-between',
    },

    appName: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: props.sidebarWidth,
      borderRight: `1px solid ${theme.palette.grey['300']}`,
      alignSelf: 'stretch',
    },

    logoutBtn: {
      marginRight: theme.spacing(2),
    },
  };

  return (
    <AppBar position="fixed" sx={styles.headbar} elevation={0}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.appName}>
          <img src={iconImage} alt="app icon" width={60} height={60} />
          <Typography variant="h6" sx={styles.title} color="primary">
            Admin Interface
          </Typography>
        </Box>
        <Button sx={styles.logoutBtn}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

Headbar.propTypes = {
  sidebarWidth: PropTypes.number.isRequired,
};

export default Headbar;
