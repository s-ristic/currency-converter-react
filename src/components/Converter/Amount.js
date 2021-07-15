import React, { useEffect, useRef } from 'react';

import styles from './Amount.module.css';

function Amount({ amount, setAmount }) {
  const refInput = useRef();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const resetAmount = (e) => {
    if (e.target.value <= 0) {
      setAmount('');
    }
  };

  return (
    <section className={styles.amount}>
      <span className={styles.action}>Amount</span>

      <input
        type='number'
        placeholder='Type a number'
        value={amount}
        ref={refInput}
        onChange={(e) => {
          setAmount(e.target.value);
          resetAmount(e);
        }}
        className={styles.input}
      />
    </section>
  );
}

export default React.memo(Amount);
