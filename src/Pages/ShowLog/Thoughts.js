import React, { Fragment } from 'react';

const Thoughts = ({ thoughts }) => {
  function renderThoughts() {
    if (thoughts) {
      return thoughts.map(t => {
        return (
          <Fragment key={t.id}>
            <tr>
              <th>Negative Thought</th>
              <th>Belief in the negative thought before logging</th>
              <th>Belief in the negative thought after logging</th>
              <th>Positive Thought</th>
              <th>Belief in the positive thought</th>
              <th>Cognetive distortion</th>
            </tr>
            <tr>
              <td>{t.n_thought}</td>
              <td>{t.n_before}</td>
              <td>{t.n_after}</td>
              <td>{t.p_thought}</td>
              <td>{t.p_belief}</td>
              <td>{t.distortion.name}</td>
            </tr>
          </Fragment>
        );
      });
    }
  }

  return (
    <table className="thoughts-table">
      <tbody>{renderThoughts()}</tbody>
    </table>
  );
};

export default Thoughts;
// {
//     "id": 1,
//     "n_thought": "Neggggg",
//     "n_before": 20,
//     "n_after": 60,
//     "p_thought": "noooooo negggg",
//      "p_belief": 99,
//      "distortion": {
//         "id": 3,
//         "name": "Mental Filter(MF)",
//         "description": "You dwell on the negatives and ignore the             positives"     }
