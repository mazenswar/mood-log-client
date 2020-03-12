import React from 'react';
import CustomSelect from '../CustomSelect';

const SubEmotionsSelectTag = ({ emotions, handleChange, i, emotionsForm }) => {
  const subEmotions = emotions.map(e => e.sub_emotions).flat();
  return (
    <CustomSelect
      data={subEmotions}
      initialValue={'Please select an emotion'}
      valueToShow={'name'}
      valueToExtract={'id'}
      callback={handleChange}
      cname="emotion"
      i={i}
    />
  );

  // <CustomSelect
  //    data = { arrOfObjs }
  //    initialValue = { value }
  //    valueToShow = {: name }
  //    valueToExtract = {: id }
  //    callback = { handleChange }
  // />

  //////////////////////////
  // const renderOptions = () => {
  //   return subEmotions.map(se => {
  //     return (
  //       <option key={se.id} value={se.id}>
  //         {se.name}
  //       </option>
  //     );
  //   });
  // };
  // const defaultOption = (
  //   <option key={0} value={null} name="subEmotionId">
  //     Please select an emotion
  //   </option>
  // );
  // if (emotions) {
  //   return (
  //     <select
  //       className={'emotion-' + i}
  //       name="subEmotionId"
  //       value={emotionsForm['emotion-' + i].subEmotionId}
  //       onChange={handleChange}
  //     >
  //       {defaultOption}
  //       {renderOptions()}
  //     </select>
  //   );
  // }
  // return null;
};

export default SubEmotionsSelectTag;
