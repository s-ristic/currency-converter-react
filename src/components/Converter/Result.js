import React, { useEffect } from 'react';

import styles from './Result.module.css';

function Result({ amount, value, setValue }) {
  useEffect(() => {
    if (amount === 0 || amount === '') {
      setValue(0);
    }
  }, [amount, setValue]);

  return (
    <section className={styles.result}>
      Result: <span className={styles.number}>{value.toFixed(2)}</span>
    </section>
  );
}

export default React.memo(Result);
