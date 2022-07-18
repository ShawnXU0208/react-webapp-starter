import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import applications from '../applications/application-list';
import iconImage from '../assets/logo.png';
import { IconButton } from '../elements/buttons';

const drawerOpenWidth = 240;
const menuIconFontSize = 20;
const drawerCloseWidth = 16 * 2 * 2 + menuIconFontSize; // 16px is theme.sapcing(2)
const logoSize = 40;

function MenuItem(props) {
  const theme = useTheme();
  const { drawerOpen, name, route, icon, index, selectedMenu, setSelectedMenu } = props;
  const Icon = icon;

  return (
    <Tooltip
      title={!drawerOpen ? name : ''}
      placement="right"
      componentprops={{
        sx: {
          backgroundColor: 'gray',
          color: 'white',
          boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
        },
      }}
    >
      <ListItemButton
        selected={selectedMenu === index}
        onClick={() => setSelectedMenu(index)}
        component={RouterLink}
        to={route}
        sx={{
          borderRadius: theme.spacing(1),
          '&:hover': {
            backgroundColor: theme.palette.background,
          },
          '& .MuiTouchRipple-root': {
            width: '0px',
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: menuIconFontSize }}>
          <Icon sx={{ fontSize: menuIconFontSize, color: theme.palette.body }} />
        </ListItemIcon>
        <ListItemText
          sx={{ visibility: drawerOpen ? 'visible' : 'hidden' }}
          primary={`     ${name}`}
          primaryTypographyProps={{ variant: 'subtitle', sx: { whiteSpace: 'pre' } }}
        />
      </ListItemButton>
    </Tooltip>
  );
}

MenuItem.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  selectedMenu: PropTypes.number.isRequired,
  setSelectedMenu: PropTypes.func.isRequired,
};

function Sidebar() {
  const theme = useTheme();

  // listen for css media query match and set drawer's open status
  // to improve: trigger re-render only once when resize window from xs to sm and vice versa (now it renders twice)
  const onSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(!onSmallScreen);
  useEffect(() => {
    setDrawerOpen(!onSmallScreen);
  }, [onSmallScreen]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [selectedMenu, setSelectedMenu] = useState(
    window.localStorage.getItem('selectedMenu') ? Number(window.localStorage.getItem('selectedMenu')) : 0
  );
  // use local storage to persist menu selected state, an alternative way is to use redux store
  useEffect(() => {
    window.localStorage.setItem('selectedMenu', selectedMenu);
  }, [selectedMenu]);

  const sidebarBodyMenus = (
    <List sx={{ mt: theme.spacing(3) }}>
      {applications.map((application, index) => (
        <MenuItem
          drawerOpen={drawerOpen}
          name={application.name}
          route={application.route}
          icon={application.icon}
          index={index}
          key={application.name}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      ))}
    </List>
  );

  const sidebarFootMenus = (
    <div>
      <Divider />
      <List>
        <MenuItem
          drawerOpen={drawerOpen}
          name="settings"
          route="/settings"
          icon={SettingsOutlinedIcon}
          index={applications.length}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <MenuItem
          drawerOpen={drawerOpen}
          name="log out"
          route="/logout"
          icon={LogoutOutlinedIcon}
          index={applications.length + 1}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        height: '100%',
        width: drawerOpen ? drawerOpenWidth : drawerCloseWidth,
        borderRight: `1px solid ${theme.palette.background}`,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: drawerOpen ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ px: theme.spacing(2), py: theme.spacing(3), height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}
      >
        <div>
          <Stack direction="row" justifyContent={drawerOpen ? 'space-between' : 'center'}>
            <Box sx={{ display: drawerOpen ? 'flex' : 'none', alignItems: 'center' }}>
              <img src={iconImage} alt="app icon" width={logoSize} height={logoSize} />
              <Typography variant="title" nowrap="true" sx={{ ml: theme.spacing(1) }}>
                MY APP
              </Typography>
            </Box>
            <IconButton icon={MenuIcon} onClick={toggleDrawer} />
          </Stack>
          {sidebarBodyMenus}
        </div>
        {sidebarFootMenus}
      </Stack>
    </Box>
  );
}

export default Sidebar;
