import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
// import makeStyles from '@mui/styles/makeStyles';
// import withStyles from '@mui/styles/withStyles';
import { useTheme } from '@mui/material/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// const MyListItem = withStyles((theme) => ({
//   root: {
//     color: theme.palette.grey['700'],
//     backgroundColor: theme.palette.white,
//     '&:hover': {
//       backgroundColor: theme.palette.primary.light,
//       color: theme.palette.grey['100'],
//     },
//     '&.Mui-selected': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.grey['100'],
//     },
//     '&.Mui-selected:hover': {
//       backgroundColor: theme.palette.primary.light,
//       color: theme.palette.grey['100'],
//     },
//   },
// }))(ListItem);

function MyListItem() {
  const theme = useTheme();

  return (
    <ListItem
      sx={{
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
      }}
    />
  );
}

function Sidebar(props) {
  const styles = {
    sidebar: {
      width: props.sidebarWidth,
    },
  };

  const [selectedMenu, setSelectedMenu] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedMenu(index);
  };

  return (
    <Drawer variant="permanent" sx={styles.sidebar}>
      <Toolbar />
      <List>
        <MyListItem
          selected={selectedMenu === 1}
          onClick={(event) => handleMenuItemClick(event, 1)}
          component={RouterLink}
          to="/"
        >
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MyListItem>
        <MyListItem
          button
          selected={selectedMenu === 2}
          onClick={(event) => handleMenuItemClick(event, 2)}
          component={RouterLink}
          to="/app1"
        >
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText>App 1</ListItemText>
        </MyListItem>
        <MyListItem
          button
          selected={selectedMenu === 3}
          onClick={(event) => handleMenuItemClick(event, 3)}
          component={RouterLink}
          to="/app2"
        >
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
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
