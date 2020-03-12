import React, { Fragment } from 'react';

const Emotions = ({ emotions }) => {
  console.log('------->', emotions);

  function renderEmotions() {
    if (emotions) {
      return emotions.map(e => {
        return (
          <Fragment key={e.id}>
            <tr>
              <th>Emotion</th>
              <th>SubEmotion</th>
            </tr>
            <tr>
              <td>{e.emotion_name}</td>
              <td>{e.name}</td>
            </tr>
          </Fragment>
        );
      });
    }
  }

  return (
    <table className="emotions-table">
      <tbody>{renderEmotions()}</tbody>
    </table>
  );
};

export default Emotions;
