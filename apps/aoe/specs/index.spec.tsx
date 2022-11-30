import Index from '../pages/index';
import { renderWithProviders } from '../utils/test-utils';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<Index />);
    expect(baseElement).toMatchSnapshot();
  });
});
