import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLink({ label, to, className }) {
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
}

export default NavigationLink;
