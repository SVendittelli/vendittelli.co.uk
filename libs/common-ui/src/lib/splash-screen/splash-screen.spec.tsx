import { fireEvent, render, screen } from '@testing-library/react';

import SplashScreen from './splash-screen';

describe('SplashScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SplashScreen dismissText="Dismiss" onDismiss={() => ({})}>
        Test
      </SplashScreen>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should call dismiss prop when button is clicked', () => {
    const dismiss = jest.fn();
    render(
      <SplashScreen dismissText="Dismiss" onDismiss={dismiss}>
        Test
      </SplashScreen>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(dismiss).toHaveBeenCalled();
  });
});
