import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeDefined();
  });

  it('should have a name in the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Sam Vendittelli/)).toMatchSnapshot();
  });
});
