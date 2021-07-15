import React from 'react';

import styles from './Author.module.css';

import logo from '../../../assets/images/author-logo.webp';

function Author() {
  return (
    <div className={styles.author}>
      <span className={styles.text}>Powered by</span>
      <a
        href='https://savo-ristic-portfolio.netlify.app'
        target='_blank'
        rel='noreferrer'
        className={styles.link}>
        <img src={logo} alt='Logo' className={styles.logo} />
      </a>
    </div>
  );
}

export default Author;
