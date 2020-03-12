import React from 'react';

import { useSelector } from 'react-redux';

const EmotionsDisplay = () => {
  const emotions = useSelector(state =>
    state.data.emotions ? state.data.emotions : []
  );
  const renderEmotions = () => {
    if (emotions.length) {
      return emotions.map(e => {
        const sub = e.sub_emotions.map(s => s.name).join(', ');
        return (
          <div key={e.id} className="single-emotion-container">
            <h5 style={{ fontWeight: 'bold' }}>{e.name}</h5>
            <div>
              <p> {sub}</p>
            </div>
          </div>
        );
      });
    }
    let components = [];
    for (let e in emotions) {
      const sub = emotions[e].join(', ');
      components.push(
        <div className="single-emotion-container">
          <h5 style={{ fontWeight: 'bold' }}>{e}</h5>
          <div>
            <p> {sub}</p>
          </div>
        </div>
      );
    }
    return components;
  };

  return (
    <div className="emotions-display-container">
      <h3>Emotion Categories</h3>
      {renderEmotions()}
    </div>
  );
};

export default EmotionsDisplay;
