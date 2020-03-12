import React from 'react';
import { useSelector } from 'react-redux';
import EmotionInput from './EmotionInput';

export default function EmotionInputsContainer() {
  const emotions = useSelector(state =>
    state.data.emotions ? state.data.emotions : []
  );

  //   function renderEmotionInputs() {
  //     if (emotions.length) {
  //       return emotions.map((e, i) => <EmotionInput key={i} emotions={e} />);
  //     }
  //   }

  return (
    <div>
      <EmotionInput emotions={emotions} />
      <EmotionInput emotions={emotions} />
    </div>
  );
}
