import { render } from '@testing-library/react';

import HexBackground from './hex-background';

describe('HexBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HexBackground />);
    expect(baseElement).toBeDefined();
  });
});
