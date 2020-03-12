import React from 'react';

const EventTextArea = ({ eventText, setEventText }) => {
  return (
    <div className="event-textarea-container">
      <label htmlFor="event-textarea">
        <h3>Describe the upsetting event:</h3>
      </label>
      <textarea
        id="event-textarea"
        rows="10"
        onChange={e => setEventText(e.target.value)}
        value={eventText}
      ></textarea>
    </div>
  );
};

export default EventTextArea;
