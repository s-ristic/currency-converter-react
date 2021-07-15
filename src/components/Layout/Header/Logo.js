import React from 'react';

import NavigationLink from '../../ui/NavigationLink';

import styles from './Logo.module.css';

function Logo() {
  return <NavigationLink label='Currency Converter' to='/' className={styles.logo} />;
}

export default Logo;
