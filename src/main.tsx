import './index.scss';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure the element with id 'root' exists in your HTML."
  );
}

const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
