import React from 'react';

function ExternalLink({ label, href, target, rel,title, className }) {
  return (
    <a href={href} target={target} rel={rel} title={title} className={className}>
      {label}
    </a>
  );
}

export default ExternalLink;
