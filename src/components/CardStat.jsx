import React from 'react';

const CardStat = ({ label, value, subtitle }) => {
  return (
    <div className="card-stat">
      <h3>{label}</h3>
      <p className="stat-value">{value}</p>
      {subtitle && <p className="stat-subtitle">{subtitle}</p>}
    </div>
  );
};

export default CardStat;
