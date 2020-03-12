import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../../Redux/Actions/userActions';
import Login from './Login';
import Signup from './Signup';

const Index = ({ history }) => {
  const dispatch = useDispatch();
  // State
  const [login, setLogin] = useState(true);
  const defaultState = login ? loginDefaultState : signUpDefaultState;
  const [userData, setUserData] = useState(defaultState);

  const handleChange = e =>
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });

  const handleSubmit = e => {
    e.preventDefault();
    const endpoint = login ? '/login' : '/users';
    dispatch(userActions.signupOrLoginUserToAPI(userData, endpoint));
    console.log('submitted user data: ', userData);
    setUserData(defaultState);
    history.push('/');
  };

  return (
    <div className="auth-page">
      <h1>{login ? 'Log in' : 'Sign Up'}</h1>
      {login ? (
        <Login
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          form={userData}
        />
      ) : (
        <Signup
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          form={userData}
        />
      )}
      <div className="form-switch-container">
        <button onClick={() => setLogin(true)}>Login</button>
        <button onClick={() => setLogin(false)}>Sign Up</button>
      </div>
    </div>
  );
};

const loginDefaultState = {
  password: '',
  username: ''
};

const signUpDefaultState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  username: '',
  dob: ''
};

export default Index;
