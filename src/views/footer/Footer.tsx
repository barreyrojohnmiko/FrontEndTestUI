import { Box } from '@mui/material';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarIcon from '@mui/icons-material/Star';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CasinoIcon from '@mui/icons-material/Casino';
import WalletIcon from '@mui/icons-material/Wallet';

import NavigationMenuView from '../menu/navigationMenu/NavigationMenu';

const menuItems = [
  { id: 1, icon: SportsSoccerIcon, label: 'Sports' },
  { id: 2, icon: StarIcon, label: 'Favorites' },
  { id: 3, icon: PersonAddAlt1Icon, label: 'Invite' },
  { id: 4, icon: CasinoIcon, label: 'Casino Live' },
  { id: 5, icon: WalletIcon, label: 'Cashier' },
];

const FooterView = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        justifyItems: 'center',
        bgcolor: '#f0f0f0',
      }}
    >
      {menuItems.map((item) => (
        <NavigationMenuView key={item.id} icon={item.icon} label={item.label} />
      ))}
    </Box>
  );
};

export default FooterView;
