import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />, { wrapper: BrowserRouter });

    expect(baseElement).toBeDefined();
  });

  it('should show the splash screen', () => {
    const { baseElement } = render(<App />, { wrapper: BrowserRouter });

    expect(baseElement).toMatchSnapshot();
  });
});
