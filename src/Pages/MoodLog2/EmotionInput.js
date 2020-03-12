import React, { useState, useRef } from 'react';
import CustomSelect from '../CustomSelect';
import Error from '../../Components/Error';

export default function EmotionInput({ emotions }) {
  const subEmotions = emotions.length
    ? emotions.map(e => e.sub_emotions).flat()
    : [];
  const intenseInput = useRef();
  const [error, setError] = useState(false);
  // State
  const [value, setValue] = useState('');
  const [intensity, setIntensity] = useState('1');
  // Helpers
  function handleInput(e) {
    const num = parseInt(e.target.value) || 0;
    const update = num >= 1 && num <= 100;
    if (update) {
      setIntensity(num);
      setError(false);
      intenseInput.current.style.border = '';
    } else {
      setIntensity(num);
      intenseInput.current.style.border = '2px solid red';
      setError(true);
    }
  }
  return (
    <>
      <Error show={error} message="Please enter a number between 1-100" />
      <CustomSelect
        data={subEmotions}
        initialValue={'Please select an emotion'}
        valueToShow={'name'}
        valueToExtract={'id'}
        callback={setValue}
      />
      <h4>Intensity %</h4>
      <input
        ref={intenseInput}
        type="number"
        min={1}
        max={100}
        name="intensity"
        value={intensity}
        onChange={handleInput}
      />
    </>
  );
}

// const subEmotions = emotions.map(e => e.sub_emotions).flat();
// return (
//   <CustomSelect
//     data={subEmotions}
//     initialValue={'Please select an emotion'}
//     valueToShow={'name'}
//     valueToExtract={'id'}
//     callback={handleChange}
//     cname="emotion"
//     i={i}
//   />
// );
