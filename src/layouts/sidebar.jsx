import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const MyListItem = withStyles((theme) => ({
  root: {
    color: theme.palette.grey['700'],
    backgroundColor: theme.palette.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.grey['100'],
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey['100'],
    },
    '&.Mui-selected:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.grey['100'],
    },
  },
}))(ListItem);

function Sidebar(props) {
  const useStyles = makeStyles(() => ({
    sidebar: {
      width: props.sidebarWidth,
    },
  }));

  const classes = useStyles();
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedMenu(index);
  };

  return (
    <Drawer variant="permanent" classes={{ paper: classes.sidebar }}>
      <Toolbar />
      <List>
        <MyListItem
          selected={selectedMenu === 1}
          onClick={(event) => handleMenuItemClick(event, 1)}
          component={RouterLink}
          to="/"
        >
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MyListItem>
        <MyListItem
          button
          selected={selectedMenu === 2}
          onClick={(event) => handleMenuItemClick(event, 2)}
          component={RouterLink}
          to="/app1"
        >
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText>App 1</ListItemText>
        </MyListItem>
        <MyListItem
          button
          selected={selectedMenu === 3}
          onClick={(event) => handleMenuItemClick(event, 3)}
          component={RouterLink}
          to="/app2"
        >
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText>App 2</ListItemText>
        </MyListItem>
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  sidebarWidth: PropTypes.number.isRequired,
};

export default Sidebar;
