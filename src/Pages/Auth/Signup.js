import React from 'react';

const Signup = ({ handleChange, handleSubmit, form }) => {
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
      <label htmlFor="first_name"> First Name</label>
      <input
        id="first_name"
        type="text"
        name="first_name"
        value={form.first_name}
        onChange={handleChange}
      />
      <label htmlFor="last_name"> Last Name</label>
      <input
        id="last_name"
        type="text"
        name="last_name"
        value={form.last_name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="dob">Date of Birth</label>
      <input
        id="dob"
        type="dob"
        name="dob"
        value={form.dob}
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
      <input type="submit" value={'Sign Up'} />
    </form>
  );
};

export default Signup;
