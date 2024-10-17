import { createBrowserRouter } from 'react-router-dom';

import HomeComponent from './components/home/Home';

import NotFound from './errors/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeComponent />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  // {
  //   basename: '/SKUvantageUI/',
  // }
);

export default router;
