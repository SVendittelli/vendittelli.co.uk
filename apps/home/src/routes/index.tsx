import AboutPage from '../app/about-page/about-page';
import App from '../app/app';
import ErrorPage from '../app/error-page/error-page';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div></div> },
      {
        path: 'about-me',
        element: <AboutPage />,
      },
    ],
  },
];

export default routes;
