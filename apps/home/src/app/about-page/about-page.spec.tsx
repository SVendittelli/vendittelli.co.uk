import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import AboutPage from './about-page';

describe('AboutPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutPage />, { wrapper: BrowserRouter });
    expect(baseElement).toBeTruthy();
  });
});
