import { ReactNode } from 'react';
import styles from './splash-screen.module.scss';

export interface SplashScreenProps {
  children: ReactNode;
  dismissText: string;
  onDismiss: () => void;
}

export function SplashScreen({
  children,
  dismissText,
  onDismiss,
}: SplashScreenProps) {
  return (
    <main className={styles['container']}>
      {children}

      <button onClick={onDismiss}>{dismissText}</button>
    </main>
  );
}

export default SplashScreen;
