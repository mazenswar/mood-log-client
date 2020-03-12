import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const username = useSelector(state => state.currentUser.username);
  return (
    <div>
      <h1>Home ~~~~~~> {username}</h1>
    </div>
  );
};

export default Home;
