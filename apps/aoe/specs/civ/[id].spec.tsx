import Civilisation from '../../pages/civ/[id]';
import { renderWithProviders } from '../../utils/test-utils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/civ/aztecs',
      query: { id: 'aztecs' },
    };
  },
}));

describe('Civilisation', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<Civilisation />);
    expect(baseElement).toMatchSnapshot();
  });
});
