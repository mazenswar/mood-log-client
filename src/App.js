import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Routes from './Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import userActions from './Redux/Actions/userActions';
import dataActions from './Redux/Actions/staticDataActions';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.fetchStaticDataFromAPI());
    if (localStorage.token) {
      dispatch(userActions.persistUserFromAPI());
    }
  }, [dispatch]);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
