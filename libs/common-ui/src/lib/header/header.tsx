import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export interface HeaderProps {
  text: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['container']}>
      <Link className={styles['title']} to={'/'}>
        {props.text}
      </Link>
      <Link to={'about-me'}>About Me</Link>
      <Link to={'contact'}>Contact</Link>
    </header>
  );
}

export default Header;
