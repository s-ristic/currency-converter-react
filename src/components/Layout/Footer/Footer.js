import React from 'react';

import Description from './Description';
import SocialMedia from './SocialMedia';
import Author from './Author';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Description />
      <SocialMedia />
      <Author />
    </footer>
  );
}

export default Footer;
