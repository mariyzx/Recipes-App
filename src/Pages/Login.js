import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/Login.css';
import title from '../images/title.png';

const MAGIC_SIX = 6;

function Login() {
  const [email, setChangeEmail] = useState('');
  const [password, setChangePass] = useState('');
  const [loginButton, setLoginButton] = useState(true);
  const [redirectFoods, setRedirectFoods] = useState(false);

  useEffect(() => {
    const validEmail = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const validPassword = password.length > MAGIC_SIX;
    if (validEmail && validPassword) {
      setLoginButton(false);
    } else {
      setLoginButton(true);
    }
  }, [email, password]);

  const saveOnLocalStorage = () => {
    setRedirectFoods(true);
    const userData = JSON.stringify({ email });
    localStorage.setItem('user', userData);
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
  };

  return (
    <div className="main-login">
      <div className="div-login">
        <img src={ title } alt="title" />
        {redirectFoods && <Redirect to="/foods" />}
        <form>
          <input
            className="form-control"
            type="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ (e) => setChangeEmail(e.target.value) }
          />
          <input
            className="form-control"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            onChange={ (e) => setChangePass(e.target.value) }
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ loginButton }
            onClick={ () => saveOnLocalStorage() }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
