import React from 'react';

import Button from '../ui/Button';

import styles from './Error.module.css';

function Error({ errorMsg, setIsError }) {
  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <div className={styles.code}>{errorMsg.code}</div>
        <div className={styles.message}>{errorMsg.error_type}!</div>
        <Button label='Close' onClick={() => setIsError(false)} />
      </div>
    </div>
  );
}

export default Error;
