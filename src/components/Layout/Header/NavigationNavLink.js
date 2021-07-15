import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationNavLink.module.css';

function NavigationNavLink({ label, exact, to }) {
  return (
    <li className={styles.item}>
      <NavLink exact={exact} to={to} className={styles.link} activeClassName={styles.active}>
        {label}
      </NavLink>
    </li>
  );
}

export default NavigationNavLink;
