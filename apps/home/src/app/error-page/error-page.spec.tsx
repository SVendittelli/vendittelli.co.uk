import { render } from '@testing-library/react';

import ErrorPage from './error-page';

describe('ErrorPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorPage />);
    expect(baseElement).toBeTruthy();
  });
});
