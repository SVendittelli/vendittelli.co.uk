import { Header, Profile } from '@vendittelli/common-ui';
import { Outlet } from 'react-router-dom';
import HexBackground from './hex-background/hex-background';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['container']}>
      <HexBackground />
      <Header text="Sam Vendittelli" />
      <main>
        <div className={styles['profile-section']}>
          <Profile></Profile>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default App;
