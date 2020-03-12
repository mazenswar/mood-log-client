import React from 'react';
import CustomSelect from '../CustomSelect';

const CogentiveDistortionSelect = ({ distortions, handleChange, i }) => {
  return (
    <CustomSelect
      data={distortions}
      initialValue={'Please select a distortion'}
      valueToShow={'name'}
      valueToExtract={'id'}
      callback={handleChange}
      cname="thought"
      i={i}
    />
  );
};

export default CogentiveDistortionSelect;
