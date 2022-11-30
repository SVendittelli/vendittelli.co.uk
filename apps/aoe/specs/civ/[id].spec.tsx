import { render } from '@testing-library/react';

import Civilisation from '../../pages/civ/[id]';

describe('Civilisation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Civilisation details={{ id: 'id', name: 'name' }} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
