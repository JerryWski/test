/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import styles from './NavigationBar.module.css';

interface NavigationBarProps {
  toggleOverLay: () => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({ toggleOverLay }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive: () => void = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className={styles.nav_bar}>
        <div className={styles.logo_container}>
          <a href='#home'>
            <img
              className={styles.logo_container__image}
              src={require('../images/logo-five.png')}
              alt='logo'
            />
          </a>
        </div>
        <ul
          className={`${styles.nav_bar__list} ${isActive ? styles.active : ''}`}
        >
          <li className={styles.nav_bar__list_item}>
            <a className={styles.links} href=''>
              O mnie
            </a>
          </li>
          <li className={styles.nav_bar__list_item}>
            <a className={styles.links} href=''>
              Portfolio
            </a>
          </li>
          <li className={styles.nav_bar__list_item}>
            <a className={styles.links} href=''>
              Działalność
            </a>
          </li>
          <li className={styles.nav_bar__list_item}>
            <a className={styles.links} href=''>
              Kontakt
            </a>
          </li>
        </ul>
        <ul className={styles.nav_bar__social}>
          <li className={styles.nav_bar__social_item}>
            <a className={styles.icons} href=''>
              I
            </a>
          </li>
          <li className={styles.nav_bar__social_item}>
            <a className={styles.icons} href=''>
              E
            </a>
          </li>
          <li className={styles.nav_bar__social_item}>
            <a className={styles.icons} href=''>
              T
            </a>
          </li>
        </ul>
        <HamburgerButton isActive={isActive} toggleActive={toggleActive} toggleOverlay={toggleOverLay} />
        <span></span>
      </nav>
    </>
  );
};

export default NavigationBar;
