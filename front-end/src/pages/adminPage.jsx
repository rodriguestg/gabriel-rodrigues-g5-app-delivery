import React, { Component } from 'react';
// import NavBar from '../components/NavBar'

export class adminPage extends Component {
  render() {
    const index = 1;
    return (
      <div>
        <h1>Cadastrar novo usuário</h1>
        <table>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Senha</td>
            <td>Tipo</td>
          </tr>
          <tr>
            <td>
              <input
                placeholder="Nome e sobrenome"
                data-testid="admin_manage__input-name"
              />
            </td>
            <td>
              <input
                placeholder="seu-email@site.com.br"
                data-testid="admin_manage__input-email"
              />
            </td>
            <td>
              <input
                placeholder="**********"
                data-testid="admin_manage__input-password"
              />
            </td>
            <select
              name="type"
              defaultValue="Vendedor"
              data-testid="admin_manage__select-role"
            >
              <option value="Vendedor">Vendedor</option>
              <option value="Administrador" selected>Administrador</option>
              <option value="Usuário">Usuário</option>
            </select>
            <td>
              <button
                data-testid="admin_manage__button-register"
                type="button"
              >
                Cadastrar
              </button>
            </td>
          </tr>
        </table>
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
}

export default adminPage;
