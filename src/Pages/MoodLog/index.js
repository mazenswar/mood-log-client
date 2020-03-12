import React, { useState } from 'react';
import EventTextArea from './EventTextArea';
import EmotionsForm from './EmotionsForm';
import TripleColumn from './TripleColumn';
import Outcome from './Outcome';
import helpers from './helpers';
import { emotionFormTemplate, tripleColumnTemplate } from './templates';

const MoodLog = () => {
  const [emotionsForm, setEmotionsForm] = useState(emotionFormTemplate);
  const [tripleColumn, setTripleColumn] = useState(tripleColumnTemplate);
  const [eventText, setEventText] = useState('');
  const [outcomeText, setOutcomeText] = useState('none');
  const [page, setPage] = useState(1);

  const handleSubmit = () => {
    const emotions = helpers.filterEmptyEmotionObjects(emotionsForm);
    const thoughts = helpers.filterTCemptyObjects(tripleColumn);
    const data = {
      emotions: emotions,
      thoughts: thoughts,
      event: eventText,
      outcome: outcomeText
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'bearer ' + localStorage.token
      },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:3000/logs', config);
    // .then(r => r.json())
    // .then(console.log);
  };

  const renderForm = () => {
    switch (page) {
      case 1:
        return (
          <EventTextArea eventText={eventText} setEventText={setEventText} />
        );
      case 2:
        return (
          <EmotionsForm
            emotionsForm={emotionsForm}
            setEmotionsForm={setEmotionsForm}
          />
        );
      case 3:
        return (
          <TripleColumn
            tripleColumn={tripleColumn}
            setTripleColumn={setTripleColumn}
          />
        );
      case 4:
        return (
          <Outcome
            handleSubmit={handleSubmit}
            outcomeText={outcomeText}
            setOutcomeText={setOutcomeText}
          />
        );
      default:
        return <EventTextArea setEventText={setEventText} />;
    }
  };

  // RETURN VALUE
  return (
    <div className="mood-log-form">
      {renderForm()}
      {helpers.changePageButtons(page, setPage)}
    </div>
  );
};
// END OF COMPONENT

// EXPORT
export default MoodLog;
