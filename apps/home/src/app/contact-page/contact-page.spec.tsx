import { render } from '@testing-library/react';

import ContactPage from './contact-page';

describe('ContactPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactPage />);
    expect(baseElement).toBeTruthy();
  });
});
