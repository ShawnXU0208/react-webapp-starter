import React from 'react';
import {
  AppBar, Button, Typography, Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import iconImage from '../assets/logo.png';

function Headbar(props) {
  const useStyles = makeStyles((theme) => ({
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
  }));

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.headbar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.appName}>
          <img src={iconImage} alt="app icon" width={60} height={60} />
          <Typography variant="h6" className={classes.title} color="primary">
            Admin Interface
          </Typography>
        </div>
        <Button className={classes.logoutBtn}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

Headbar.propTypes = {
  sidebarWidth: PropTypes.number.isRequired,
};

export default Headbar;
