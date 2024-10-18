import './styles.scss';

import { useState } from 'react';

import { Box, Divider, Typography } from '@mui/material';

import CarouselPanelView from '../../views/carouselPanel/CarouselPanel';
import FooterView from '../../views/footer/Footer';
import HeaderView from '../../views/header/Header';
import NavigationMenuView from '../../views/menu/navigationMenu/NavigationMenu';

import CasinoIcon from '@mui/icons-material/Casino';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person3Icon from '@mui/icons-material/Person3';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import bannerImg1 from '../../assets/images/banner.jpg';
import bannerImg2 from '../../assets/images/banner2.jpg';
import bannerImg3 from '../../assets/images/banner3.jpg';

import { useSwipeable } from 'react-swipeable';

const images = [bannerImg1, bannerImg2, bannerImg3];
const menuItems = [
  { id: 1, icon: WhatshotIcon, label: 'Start' },
  { id: 2, icon: FiberNewIcon, label: 'New' },
  { id: 3, icon: CasinoIcon, label: 'Slots' },
  { id: 4, icon: Person3Icon, label: 'Live' },
  { id: 5, icon: CelebrationIcon, label: 'Jackpots' },
];

const HomeComponent = () => {
  const [stepCount, setStepCount] = useState(0);

  const handleSwipeLeft = () => {
    setStepCount((prevCount) => (prevCount + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setStepCount((prevCount) =>
      prevCount === 0 ? images.length - 1 : prevCount - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
  });

  return (
    <Box>
      <HeaderView />

      <Box className="home-container">
        <CarouselPanelView
          carouselImg={images[stepCount]}
          handlers={handlers}
        />

        <Box className="notification-container">
          <NotificationsIcon className="notif-icon" />

          <Typography className="notif-label">
            ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
          </Typography>
        </Box>

        <Box className="feature-container">
          <Box className="search-container">
            <NavigationMenuView icon={SearchIcon} label="Search" />

            <Divider orientation="vertical" flexItem  />
          </Box>

          <Box className="feature-sub-container">
            {menuItems.map((item) => (
              <NavigationMenuView
                key={item.id}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </Box>
        </Box>

        <FooterView />
      </Box>
    </Box>
  );
};

export default HomeComponent;
