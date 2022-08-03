import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return(
    <header className={styles.header}>
    <img src={rocketLogo} alt="Foguete RocketSeat" />
      <strong className={styles.header}>To</strong><p>Do</p>
    </header>
  )
}