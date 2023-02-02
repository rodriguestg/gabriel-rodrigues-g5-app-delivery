import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import fetchUtil from '../../utils/fetchUtil';
import './Register.css';

export default function Register() {
  const history = useHistory();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Button, setButton] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const numberPassword = 6;
    const charName = 12;
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(Email) && Password.length >= numberPassword
    && Name.length >= charName) {
      return setButton(false);
    }
    return setButton(true);
  }, [Name, Email, Password]);

  const { register, handleSubmit } = useForm();
  const onClickSubmit = async (data) => {
    const registerVerify = await fetchUtil
      .fetchWithBody('/register', 'POST', { ...data, role: 'customer' });
    if (registerVerify.message === 'conflict') {
      setError(true);
    } else {
      const login = await fetchUtil.fetchWithBody('/login', 'POST', data);
      localStorage.setItem('user', JSON.stringify(login));
      if (login.role === 'customer') history.push('/customer/products');
    }
  };

  return (
    <div className="container-register">
      <div className="division">
        {error
      && (
        <p
          data-testid="common_register__element-invalid_register"
          className="errorMessage"
        >
          Erro ao fazer cadastro
        </p>)}
        <img
          src={ friends }
          alt="FriendsIcon"
          className="friends"
        />
        <form className="register" onSubmit={ handleSubmit(onClickSubmit) }>
          <img
            src={ orangeJuice }
            alt="OrangeJuiceIcon"
            className="orange-juice"
          />
          Cadastro
          <input
            data-testid="common_register__input-name"
            type="text"
            placeholder="seu nome"
            className="input"
            id="name"
            { ...register('name') }
            onChange={ ({ target }) => {
              setName(target.value);
            } }
          />
          <input
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
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
            data-testid="common_register__button-register"
            type="submit"
            disabled={ Button }
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
