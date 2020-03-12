import React from 'react';
/////////////////////////////////////////////////
const filterEmptyEmotionObjects = obj => {
  const arr = [];
  for (let e in obj) {
    if (obj[e].subEmotionId) {
      arr.push(obj[e]);
    }
  }
  return arr;
};
/////////////////////////////////////////////////
const filterTCemptyObjects = obj => {
  const arr = [];
  for (let e in obj) {
    if (obj[e].negative.thought.length) {
      arr.push(obj[e]);
    }
  }
  return arr;
};
/////////////////////////////////////////////////
function changePageButtons(page, setPage) {
  return (
    <div className="buttons-container">
      {page === 1 ? (
        <button disabled style={{ backgroundColor: 'grey' }}>
          {'<'}
        </button>
      ) : (
        <button onClick={() => setPage(page - 1)}>{'<'}</button>
      )}
      {page === 4 ? (
        <button disabled style={{ backgroundColor: 'grey' }}>
          {'>'}
        </button>
      ) : (
        <button onClick={() => setPage(page + 1)}>{'>'}</button>
      )}
    </div>
  );
}
/////////////////////////////////////////////////
// EXPORT
export default {
  filterEmptyEmotionObjects,
  filterTCemptyObjects,
  changePageButtons
};
