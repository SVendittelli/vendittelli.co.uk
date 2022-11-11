import styles from './header.module.scss';

export interface HeaderProps {
  text: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['container']}>
      <h1>{props.text}</h1>
    </header>
  );
}

export default Header;
