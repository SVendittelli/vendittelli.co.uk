import { Header, Profile } from '@vendittelli/common-ui';
import classNames from 'classnames';
import { Outlet, useMatch } from 'react-router-dom';
import HexBackground from './hex-background/hex-background';

import styles from './app.module.scss';

export function App() {
  const match = useMatch('/');

  return (
    <div className={styles['container']}>
      <HexBackground />
      <Header text="Sam Vendittelli" />
      <main>
        <div
          className={classNames(styles['profile-section'], {
            [styles['full-height']]: !!match,
          })}
        >
          <Profile></Profile>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default App;
