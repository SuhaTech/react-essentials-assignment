import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;