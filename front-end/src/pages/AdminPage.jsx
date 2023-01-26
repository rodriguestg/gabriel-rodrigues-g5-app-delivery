import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import NavBar from '../components/NavBar';

export default function AdminPage() {
  const index = 1;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Vendedor');
  const [btnStatus, setBtnStatus] = useState(false);

  useEffect(() => {
    const numberName = 12;
    const numberPassword = 6;
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(email)
      && password.length >= numberPassword
      && fullName.length >= numberName) {
      setBtnStatus(false);
    } if (!valid.test(email)
      || password.length < numberPassword
      || fullName.length < numberName) {
      setBtnStatus(true);
    }
  }, [email, password, role, fullName]);

  const postUser = async () => {
    try {
      axios.defaults
        .headers.post.Authorization = JSON.parse(localStorage.getItem('user'));
      // console.log(axios.defaults.headers.post.Authorization);
      const data = await axios.post('http://localhost:3001/new-register', {
        fullName,
        email,
        password,
        role,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* { NavBar() } */}
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="fullName">
          Nome
          <input
            id="fullName"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            type="text"
            onChange={ ({ target }) => {
              setFullName(target.value);
            } }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            onChange={ ({ target }) => {
              setEmail(target.value);
            } }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            placeholder="**********"
            data-testid="admin_manage__input-password"
            onChange={ ({ target }) => {
              setPassword(target.value);
            } }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            name="role"
            defaultValue="Vendedor"
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => {
              setRole(target.value);
            } }
          >
            <option value="Vendedor">Vendedor</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuário">Usuário</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ btnStatus }
          onClick={ postUser }
        >
          Cadastrar
        </button>
      </form>
      <h1>Lista de usuários</h1>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Nome</td>
            <td>Email</td>
            <td>Tipo</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              1
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-name-${index}` }
            >
              Nome
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              Email
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              Tipo
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
            >
              Excluir
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
