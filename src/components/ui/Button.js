import React from 'react';

import './Button.css';

function Button({ primary, large, label, onClick }) {
  return (
    <button
      className={`btn ${primary && 'btn--primary'} ${large && 'btn--large'}`}
      onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
