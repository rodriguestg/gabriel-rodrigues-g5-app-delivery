import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

export default function AdminPage() {
  const history = useHistory();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [btnStatus, setBtnStatus] = useState(false);
  const [usersAll, setUsersAll] = useState([]);
  const [errorRegister, setError] = useState(false);

  const getAllUsers = async () => {
    const getUsers = await axios.get('http://localhost:3001/users');
    const users = getUsers.data.filter((user) => user.role !== 'administrator');
    setUsersAll(users);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
      const { token, role: roleUser } = JSON.parse(localStorage.getItem('user'));
      if (roleUser !== 'administrator') { history.push('/login'); }
      axios.defaults
        .headers.post.Authorization = token;
      await axios.post('http://localhost:3001/new-register', {
        fullName,
        email,
        password,
        role,
      });
      setError(false);
      getAllUsers();
    } catch (error) {
      setError(true);
    }
  };

  const removeUser = async () => {
    try {
      axios.defaults
        .headers.post.Authorization = token;
      const userRegister = await axios.post('http://localhost:3001/new-register', {
        email,
      });
      console.log(userRegister);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      { NavBar() }
      { errorRegister
        ? <p data-testid="admin_manage__element-invalid-register">Erro no cadastro</p>
        : null }
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
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Usuário</option>
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
          {
            usersAll.map((user, index) => (
              <tr key={ index }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  { user.id }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  { user.name }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  { user.email }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  { user.role }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  <button type="button" onClick={ removeUser }>Excluir</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
