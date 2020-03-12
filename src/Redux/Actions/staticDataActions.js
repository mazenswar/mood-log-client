import API from '../../API';

const setStaticDataAction = data => ({
  type: 'SET_DATA',
  payload: data
});

const fetchStaticDataFromAPI = () => dispatch => {
  fetch(API.BASE_URL + '/static-data')
    .then(r => r.json())
    .then(data => {
      dispatch(setStaticDataAction(data));
    });
};

export default {
  fetchStaticDataFromAPI
};
