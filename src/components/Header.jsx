import styles from './Header.module.css';
import nevixLogo from '../assets/nevix-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={nevixLogo} alt="Logotipo do Nevix" />
    </header>
  );
}
