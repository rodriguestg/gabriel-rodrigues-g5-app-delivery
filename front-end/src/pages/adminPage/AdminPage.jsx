/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-max-depth */
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import NavBar from '../../components/NavBar/NavBar';
import './adminPage.css';

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
      setFullName('');
      setEmail('');
      setPassword('');
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
    <div className="admin-page-container">
      { NavBar() }
      <div className="admin-container">
        <div className="users-container">
          <h5 className="admin-title">
            Lista de usuários
          </h5>
          <div className="list-users-container">
            <div className="header-table-admin">
              <h5>
                Nome
              </h5>
              <h5>
                Tipo
              </h5>
              <h5>
                Email
              </h5>
              <h5>
                Excluir
              </h5>
            </div>
            {
              usersAll.map((user, index) => (
                <div key={ index } className="user-card-container">
                  <div className="user-info">
                    <h5
                      data-testid={ `admin_manage__element-user-table-name-${index}` }
                    >
                      { user.name }
                    </h5>
                    <h5
                      data-testid={ `admin_manage__element-user-table-role-${index}` }
                      className="tipo-admin"
                    >
                      { user.role === 'seller' ? 'Vendedor'
                        : user.role === 'customer' ? 'Cliente' : 'Administrador' }
                    </h5>
                    <h5
                      data-testid={ `admin_manage__element-user-table-email-${index}` }
                      className="email-admin"
                    >
                      { user.email }
                    </h5>
                  </div>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    type="button"
                    onClick={ removeUser }
                    className="trash-icon-admin"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        <div className="admin-separator" />

        <div className="new-user-container">
          <h5 className="admin-title">
            Cadastrar novo usuário
          </h5>
          <form>
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
                type="password"
                data-testid="admin_manage__input-password"
                onChange={ ({ target }) => {
                  setPassword(target.value);
                } }
              />
            </label>
            { errorRegister
              ? (
                <p data-testid="admin_manage__element-invalid-register">
                  Erro no cadastro
                </p>
              ) : null }
            <button
              data-testid="admin_manage__button-register"
              type="button"
              disabled={ btnStatus }
              onClick={ postUser }
              className="new-user-button"
            >
              Cadastrar
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
