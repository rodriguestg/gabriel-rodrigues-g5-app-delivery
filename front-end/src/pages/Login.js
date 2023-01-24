import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/') history.push('/login');
  }, []);

  return (
    <div className="container-login">
      <form className="login">
        <input
          data-testid="common_login__input-email"
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          data-testid="common_login__input-password"
          type="password"
          placeholder="password"
          id="password"
        />
        <button
          data-testid="common_login__button-login"
          type="button"
          onClick={ () => {
            localStorage.setItem();
          } }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
