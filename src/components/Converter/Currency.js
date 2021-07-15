import React, { useState } from 'react';

import { FaAngleDown } from 'react-icons/fa';

import styles from './Currency.module.css';

function Currency({ action, currencies, select, change }) {
  const [selected, setSelected] = useState(select);
  const [showList, setShowList] = useState(false);

  return (
    <div className={styles.currency}>
      <span className={styles.action}>{action}</span>

      <span className={styles.selected} onClick={() => setShowList(!showList)}>
        {selected}

        <span className={styles.icon}>
          <FaAngleDown />
        </span>
      </span>

      {currencies.length > 0 && showList && (
        <ul className={styles.list}>
          {currencies.map((currency) => (
            <li
              key={currency.currency_code}
              value={currency.currency_code}
              onClick={(e) => {
                setShowList(!showList);
                setSelected(e.target.innerText.slice(0, 3));
                change(e.target.innerText.slice(0, 3));
              }}
              className={styles.option}>
              <span className={styles.code}>{currency.currency_code}</span> -{' '}
              {currency.currency_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Currency;
