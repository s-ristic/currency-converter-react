import React from 'react';

import NavigationNavLink from './NavigationNavLink';

import styles from './Nav.module.css';

function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <NavigationNavLink label='Converter' exact to='/' />

        <NavigationNavLink label='History' to='/history' />
      </ul>
    </nav>
  );
}

export default Menu;
