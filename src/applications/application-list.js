import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const applications = [
  {
    icon: GridViewOutlinedIcon,
    name: 'Dashboard',
    route: '/',
  },
  {
    icon: PersonOutlineOutlinedIcon,
    name: 'Profile',
    route: '/profile',
  },
  {
    icon: ShoppingCartOutlinedIcon,
    name: 'Buy Items',
    route: '/buy',
  },
  {
    icon: StorefrontOutlinedIcon,
    name: 'Sell Items',
    route: '/sell',
  },
  {
    icon: DesignServicesOutlinedIcon,
    name: 'Services',
    route: '/services',
  },
];

export default applications;
