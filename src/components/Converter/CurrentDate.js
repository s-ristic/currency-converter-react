import React from 'react';

import styles from './CurrentDate.module.css';

function CurrentDate({ date }) {
  return <div className={styles.date}>{date}</div>;
}

export default React.memo(CurrentDate);
