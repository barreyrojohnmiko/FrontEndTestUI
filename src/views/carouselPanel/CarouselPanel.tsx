import './styles.scss';

import { Box } from '@mui/material';

interface CarouselPanelViewProps {
  carouselImg: string;
  handlers: any;
}

const CarouselPanelView = ({
  carouselImg,
  handlers,
}: CarouselPanelViewProps) => {
  return (
    <Box className="carousel-sub-wrapper" {...handlers}>
      <Box
        className="carousel-img"
        sx={{
          backgroundImage: `url(${carouselImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default CarouselPanelView;
