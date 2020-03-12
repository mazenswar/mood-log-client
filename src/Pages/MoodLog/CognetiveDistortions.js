import React from 'react';

const CognetiveDistortions = ({ distortions }) => {
  const renderListItems = () => {
    if (distortions.length) {
      return distortions.map(d => {
        return (
          <div key={d.id} className="single-emotion-container">
            <h5 style={{ fontWeight: 'bold' }}>{d.name}</h5>
            <div>
              <p>{d.description}</p>
            </div>
          </div>
        );
      });
    }
  };

  return <div className="emotions-display-container">{renderListItems()}</div>;
};

export default CognetiveDistortions;

// <li key={d.id}>
//   <span style={{ fontWeight: 'bold' }}>{d.name}</span>
//   <span>{d.description}</span>
// </li>;
