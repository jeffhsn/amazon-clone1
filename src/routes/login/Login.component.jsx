import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../firebase';
import './Login.styles.css';

const defaultFormFields = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user);
      resetFormFields();
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
        alert(error.message);
      }
    }
  };

  return (
    <div className="login">
      <Link to="login">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            label="email"
            type="text"
            value={email}
            name="email"
            required
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            label="password"
            type="password"
            value={password}
            name="password"
            required
            onChange={handleChange}
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions
          of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
