import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

import ExternalLink from '../../ui/ExternalLink';

import styles from './SocialMedia.module.css';

const data = [
  {
    label: <FaFacebookF />,
    href: 'https://www.facebook.com/savo.ristic/',
    target: '_blank',
    rel: 'noreferrer',
    title:'Facebook'
  },
  {
    label: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/savo-ristic-sr/',
    target: '_blank',
    rel: 'noreferrer',
    title:'LinkedIn'
  },
  {
    label: <FaGithub />,
    href: 'https://github.com/s-ristic/',
    target: '_blank',
    rel: 'noreferrer',
    title:'Github'
  },
  {
    label: <FaEnvelope />,
    href: 'mailto:savoristic@pm.me',
    target: null,
    rel: null,
    title:'savoristic@pm.me'
  },
];

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <ul className={styles.items}>
        {data.map((item) => (
          <li key={item.href} className={styles.item}>
            <ExternalLink
              label={item.label}
              href={item.href}
              target={item.target && item.target}
              rel={item.rel && item.rel}
              title={item.title}
              className={styles.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
