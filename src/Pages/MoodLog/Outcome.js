import React from 'react';

const Outcome = ({ outcomeText, setOutcomeText, handleSubmit }) => {
  return (
    <>
      <h2>Outcome: Do you feel better after filling out the log?</h2>

      <div
        className="outcome-selection"
        onClick={e => setOutcomeText(e.target.innerText)}
      >
        <h3>Not at all</h3>
      </div>
      <div
        className="outcome-selection"
        onClick={e => setOutcomeText(e.target.innerText)}
      >
        <h3>Somewhat Better</h3>
      </div>
      <div
        className="outcome-selection"
        onClick={e => setOutcomeText(e.target.innerText)}
      >
        <h3>Quite a bit better</h3>
      </div>
      <div
        className="outcome-selection"
        onClick={e => setOutcomeText(e.target.innerText)}
      >
        <h3>A lot better</h3>
      </div>

      <h2>Selection: {outcomeText}</h2>

      <button className="submit-log-button" onClick={handleSubmit}>
        <strong>Save Log</strong>
      </button>
    </>
  );
};

export default Outcome;
