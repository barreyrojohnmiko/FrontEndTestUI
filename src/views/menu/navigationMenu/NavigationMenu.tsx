import './styles.scss';

import { Button, Typography } from '@mui/material';

import NavigationMenuObject from '../../../objects/interface/views/NavigationMenuObject';

const NavigationMenuView = ({ icon: Icon, label }: NavigationMenuObject) => {
  return (
    <Button className="nav-menu-wrapper">
      <Icon className="nav-icon" />

      <Typography className="nav-label">{label}</Typography>
    </Button>
  );
};

export default NavigationMenuView;
