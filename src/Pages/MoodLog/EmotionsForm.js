import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EmotionsDisplay from './EmotionsDisplay';
import SubEmotionsSelectTag from './SubEmotionsSelectTag';
import Error from '../../Components/Error';

const EmotionsForm = ({ emotionsForm, setEmotionsForm }) => {
  // const errorRef = useRef();
  const [error, setError] = useState(false);
  const emotions = useSelector(state =>
    state.data.emotions ? state.data.emotions : []
  );
  const renderInputs = () => {
    const inputs = [];
    for (let i = 1; i < 11; i++) {
      inputs.push(
        <div key={'input-' + i} className="emotion-input-row">
          <h4>Emotion</h4>
          <SubEmotionsSelectTag
            i={i}
            emotions={emotions}
            handleChange={handleChange}
            emotionsForm={emotionsForm}
          />
          <h4>Before %</h4>
          <input
            type="number"
            min={1}
            max={100}
            className={'emotion-' + i}
            name="before"
            value={emotionsForm['emotion-' + i].before}
            onChange={handleChange}
          />
          <h4>After %</h4>
          <input
            type="number"
            min={1}
            max={100}
            className={'emotion-' + i}
            name="after"
            value={emotionsForm['emotion-' + i].after}
            onChange={handleChange}
          />
        </div>
      );
    }
    return inputs;
  };

  const handleChange = e => {
    const inputType = !!e.target ? true : false;
    const emotionI = inputType ? null : Object.keys(e)[0];

    inputType &&
    (parseInt(e.target.value) < 1 || parseInt(e.target.value) > 100)
      ? setError(true)
      : setError(false);

    inputType
      ? setEmotionsForm({
          ...emotionsForm,
          [e.target.className]: {
            ...emotionsForm[e.target.className],
            [e.target.name]: e.target.value
          }
        })
      : setEmotionsForm({
          ...emotionsForm,
          [emotionI]: {
            ...emotionsForm[emotionI],
            subEmotionId: e[emotionI]
          }
        });
  };

  return (
    <div className="emotions-form-page">
      <Error show={error} message="Please enter a number between 1-100" />
      <EmotionsDisplay />
      {renderInputs()}
    </div>
  );
};

export default EmotionsForm;
