import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import fetchUtil from '../../utils/fetchUtil';
import friends from '../../images/friends.png';
import orangeJuice from '../../images/orangeJuice.png';
import './Login.css';

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Button, setButton] = useState('');

  useEffect(() => {
    if (history.location.pathname === '/') history.push('/login');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) history.push('/customer/products');
  }, []);

  useEffect(() => {
    const number = 6;
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(Email) && Password.length >= number) {
      setButton(false);
    } if (!valid.test(Email) || Password.length < number) {
      setButton(true);
    }
  }, [Email, Password]);

  const { register, handleSubmit } = useForm();
  const onClickSubmit = async (data) => {
    const response = await fetchUtil.fetchWithBody('/login', 'POST', data);

    if (response.message === 'Not found') {
      setError(true);
    } else {
      localStorage.setItem('user', JSON.stringify(response));
      if (response.role === 'customer') return history.push('/customer/products');
      if (response.role === 'seller') return history.push('/seller/orders');
      history.push('/admin/manage');
    }
  };

  return (
    <div className="container-login">
      <div className="division">
        {error
      && (
        <p
          data-testid="common_login__element-invalid-email"
          className="errorMessage"
        >
          Erro ao fazer login
        </p>)}
        <img
          src={ friends }
          alt="FriendsIcon"
          className="friends"
        />
        <form className="login" onSubmit={ handleSubmit(onClickSubmit) }>
          <img
            src={ orangeJuice }
            alt="OrangeJuiceIcon"
            className="orange-juice"
          />
          <input
            data-testid="common_login__input-email"
            type="email"
            placeholder="email"
            className="input"
            id="email"
            { ...register('email') }
            onChange={ ({ target }) => {
              setEmail(target.value);
            } }
          />
          <input
            data-testid="common_login__input-password"
            type="password"
            placeholder="password"
            className="input"
            id="password"
            { ...register('password', { min: 6 }) }
            onChange={ ({ target }) => {
              setPassword(target.value);
            } }
          />
          <button
            data-testid="common_login__button-login"
            type="submit"
            disabled={ Button }
            className="button-login"
          >
            Login
          </button>
          <Link
            to="/register"
          >
            <button
              data-testid="common_login__button-register"
              type="button"
              className="button-login"
            >
              Ainda não tenho conta
            </button>
          </Link>
          {/* <div
            className="link-container"
          >
            <p>Ainda não tem conta?</p>
            <a
              href="/register"
              className="link"
            >
              Cadastrar-se
            </a>
          </div> */}
        </form>
      </div>
    </div>
  );
}
