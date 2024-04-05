import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../styles/Login.css';

const Login = (props) => {
  const {
    action = {},
    userResponseData = {},
    errorMessage = ''
  } = props
  console.log('first',props)
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  console.log('errorMessage',errorMessage)
  const navigate = useNavigate(); // Initialize navigate from React Router
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const receviedUserData = action({
      type:'LOGIN-CLICK',
      payload:formData,
      navigate:navigate
    })
    console.log('receviedUserData',receviedUserData)
   
  };

  return (
    <div className='login-container'>
      <h2 className='heading'>Login Page</h2>
        <form onSubmit={handleSubmit} className='main-form'>
          <div className='main-div'>
            <input
              className='input'
              type="text"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className='input'
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='wrap-checkbox-label'>
            <span>
              <input
                className='input'
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                required
              />
            </span>
            <span>Remember Me</span>
          </div>
          <button className='submit' type="submit">Login</button>
        </form>
      {errorMessage && <h1 className='error'>{errorMessage}</h1>} {/* Conditionally render error message */}
      <p className='suggestion'>Don't have an account? <a className='route' href="/register">Register</a></p>
      {/* <p>Forgot your password? <a href="/reset-password">Reset Password</a></p> */}
    </div>
  );
};

export default Login;
