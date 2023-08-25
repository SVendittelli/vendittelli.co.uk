import emailjs from '@emailjs/browser';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { environment } from './environments/environment';
import routes from './routes';

const router = createBrowserRouter(routes);

if (environment.emailjsPublicKey) {
  emailjs.init(environment.emailjsPublicKey);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
