import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import fetchUtil from '../utils/fetchUtil';

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Button, setButton] = useState('');

  useEffect(() => {
    if (history.location.pathname === '/') history.push('/login');
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
      {error
      && <p data-testid="common_login__element-invalid-email">Erro ao fazer login</p>}
      <form className="login" onSubmit={ handleSubmit(onClickSubmit) }>
        <input
          data-testid="common_login__input-email"
          type="email"
          placeholder="email"
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
