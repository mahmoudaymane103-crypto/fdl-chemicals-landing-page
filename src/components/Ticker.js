import React from 'react';

const Ticker = () => {
  const items = [
    'Solvants', 'Acides', 'Engrais', 'Polymères', 'Gaz Spécialisés', 'Sels Industriels',
    'Solvants', 'Acides', 'Engrais', 'Polymères', 'Gaz Spécialisés', 'Sels Industriels'
  ];

  return (
    <section id="ticker">
      <div className="ticker-content">
        {items.map((item, index) => (
          <div key={index} className="ticker-item">{item}</div>
        ))}
      </div>
    </section>
  );
};

export default Ticker;