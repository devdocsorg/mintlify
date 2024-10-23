import React from 'react';

interface ReferenceProps {
  to: string;
  inline?: boolean;
}

export const Reference: React.FC
  const renderReference = () => {
    if (to.startsWith('http')) {
      return <a href={to} target="_blank" rel="noopener noreferrer">[Link]</a>;
    } else {
      return <span>[Ref: {to}]</span>;
    }
  };

  return (
    <span style={{ display: inline ? 'inline' : 'block' }}>
      {renderReference()}
    </span>
  );
};