import React from 'react';

import NavigationLink from '../ui/NavigationLink';

import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <p>404</p>
      <p>Page Not Found!</p>

      <NavigationLink label='Home Page' to='/' className='btn' />
    </div>
  );
}

export default NotFound;
