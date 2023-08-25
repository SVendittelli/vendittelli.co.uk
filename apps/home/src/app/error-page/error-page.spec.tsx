import { render } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ErrorPage from './error-page';

describe('ErrorPage', () => {
  it('should render successfully', () => {
    const router = createMemoryRouter([{ path: '/', element: <ErrorPage /> }], {
      initialEntries: ['/'],
    });

    const { baseElement } = render(<RouterProvider router={router} />);
    expect(baseElement).toBeTruthy();
  });
});
