import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import fetchUtil from '../utils/fetchUtil';

export default function Register() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Button, setButton] = useState('');

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
    // console.log(data);
    await fetchUtil
      .fetchWithBody('/register', 'POST', { ...data, role: 'customer' });
    console.log(data);
    // if (response.message === 'Not found') {
    //   setError(true);
    // }
    const login = await fetchUtil.fetchWithBody('/login', 'POST', data);
    localStorage.setItem('user', JSON.stringify(login));
    if (login) return history.push('/customer/products');
    // console.log(response);
  };

  return (
    <div className="container-register">
      {error
      && <p data-testid="common_login__element-invalid-email">Erro ao fazer cadastro</p>}
      <form className="register" onSubmit={ handleSubmit(onClickSubmit) }>
        Cadastro
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="seu nome"
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
  );
}
