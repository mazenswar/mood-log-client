import { combineReducers } from 'redux';
import currentUser from './userReducer';
import data from './staticDataReducer';

export default combineReducers({
  currentUser,
  data
});
