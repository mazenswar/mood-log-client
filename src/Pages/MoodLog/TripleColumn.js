import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import CognetiveDistortions from './CognetiveDistortions';
import CogentiveDistortionSelect from './CogentiveDistortionSelect';

const TripleColumn = ({ setTripleColumn, tripleColumn }) => {
  const distortions = useSelector(state =>
    state.data.distortions ? state.data.distortions : []
  );
  const errorRef = useRef();

  const handleChange = e => {
    const inputType = !!e.target ? true : false;
    const thoughtI = inputType ? null : Object.keys(e)[0];

    inputType &&
    (parseInt(e.target.value) < 1 || parseInt(e.target.value) > 100)
      ? (errorRef.current.style.right = '0')
      : (errorRef.current.style.right = '-50%');

    // debugger;
    inputType
      ? setTripleColumn({
          ...tripleColumn,
          [e.target.classList[0]]: {
            ...tripleColumn[e.target.classList[0]],
            [e.target.classList[1]]: {
              ...tripleColumn[e.target.classList[0]][e.target.classList[1]],
              [e.target.name]: e.target.value
            }
          }
        })
      : setTripleColumn({
          ...tripleColumn,
          [thoughtI]: {
            ...tripleColumn[thoughtI],
            distortion: { id: e[thoughtI] }
          }
        });
  };

  const renderColumns = () => {
    const arr = [];
    for (let i = 1; i < 5; i++) {
      arr.push(
        <div className="thought-container" key={`thought-${i}`}>
          <div className="thought-row">
            <span className="title-span">Negative Emotion</span>
            <textarea
              cols="65"
              className={`thought-${i} negative`}
              name="thought"
              value={tripleColumn[`thought-${i}`].negative.thought}
              onChange={handleChange}
            />
            <span className="title-span">Before %</span>
            <input
              type="number"
              min={1}
              max={100}
              className={`thought-${i} negative`}
              name="before"
              value={tripleColumn[`thought-${i}`].before}
              onChange={handleChange}
            />
            <span className="title-span">After %</span>
            <input
              type="number"
              min={1}
              max={100}
              className={`thought-${i} negative`}
              name="after"
              value={tripleColumn[`thought-${i}`].after}
              onChange={handleChange}
            />
          </div>
          <div className="thought-row">
            <CogentiveDistortionSelect
              distortions={distortions}
              handleChange={handleChange}
              tripleColumn={tripleColumn}
              i={i}
            />
          </div>
          <div className="thought-row">
            <span className="title-span">Positive Thought</span>
            <textarea
              cols="65"
              className={`thought-${i} positive`}
              name="thought"
              onChange={handleChange}
            />
            <span className="title-span">Belief</span>
            <input
              type="number"
              min={1}
              max={100}
              className={`thought-${i} positive`}
              name="belief"
              value={tripleColumn[`thought-${i}`].belief}
              onChange={handleChange}
            />
          </div>
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="triple-column-container">
      <h3>Triple Column Technique: (Rate your belief in each one 0 – 100)</h3>
      <div
        ref={errorRef}
        style={{
          textAlign: 'center',
          width: '50%',
          position: 'fixed',
          right: '-50%',
          top: '20%',
          backgroundColor: 'red',
          color: 'white',
          overflow: 'hidden',
          transition: '0.7s',
          padding: '20px',
          borderRadius: '100px 0 0 100px'
        }}
      >
        <p>Please enter a number between 1 - 100</p>
      </div>
      <CognetiveDistortions distortions={distortions} />
      {renderColumns()}
    </div>
  );
};

export default TripleColumn;
