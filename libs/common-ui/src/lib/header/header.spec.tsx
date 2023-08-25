import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header text="Example" />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
