import { fireEvent, render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeDefined();
  });

  it('should show the splash screen', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should show the home page after dismissing the splash screen', async () => {
    const { baseElement } = render(<App />);

    fireEvent.click(screen.getByRole('button'));

    expect(baseElement).toMatchSnapshot();
  });
});
