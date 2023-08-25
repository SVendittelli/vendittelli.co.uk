import emailjs from '@emailjs/browser';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes);

if (process.env['NX_EMAILJS_PUBLIC_KEY']) {
  emailjs.init(process.env['NX_EMAILJS_PUBLIC_KEY']);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
