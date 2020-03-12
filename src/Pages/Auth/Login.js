import React from 'react';

const Login = ({ form, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"> Username</label>
      <input
        id="username"
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <input type="submit" value={'Log in'} />
    </form>
  );
};

export default Login;
