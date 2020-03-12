import API from '../../API';

const setUserAction = user => ({
  type: 'SET_USER',
  payload: user
});
const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

const persistUserFromAPI = () => dispatch => {
  fetch(API.PERSIST_URL, {
    headers: {
      'content-type': 'application/json',
      Authorization: 'bearer ' + localStorage.token
    }
  })
    .then(r => r.json())
    .then(user => {
      dispatch(setUserAction(user));
    });
};

const signupOrLoginUserToAPI = (data, endpoint) => dispatch => {
  fetch(API.BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'bearer ' + localStorage.token
    },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.token = data.token;
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  persistUserFromAPI,
  signupOrLoginUserToAPI,
  logoutUser
};
