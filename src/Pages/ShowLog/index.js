import React, { useEffect, useState } from 'react';
import Emotions from './Emotions';
import Thoughts from './Thoughts';

const ShowLog = ({ match }) => {
  const [log, setLog] = useState({});

  useEffect(() => {
    const logId = match.params.id;
    fetch('http://localhost:3000/logs/' + logId)
      .then(r => r.json())
      .then(setLog);
  }, [match.params.id]);
  console.log(log);

  return (
    <div className="show-log">
      <h1>{log.id ? log.user.username : null}</h1>
      <h3>Event</h3>
      <p>{log.event}</p>
      <h3>Emotions</h3>
      <Emotions emotions={log.sub_emotions} />
      <h3>Thoughts</h3>
      <Thoughts thoughts={log.thoughts} />
      <h3>Outcome</h3>
      <p>{log.outcome}</p>
    </div>
  );
};

export default ShowLog;
