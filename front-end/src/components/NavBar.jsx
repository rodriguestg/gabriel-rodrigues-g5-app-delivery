import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import getUserLocalStorage from '../utils/userLocalStorage';

export default function NavBar() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  const nameTag = (
    <p data-testid="customer_products__element-navbar-user-full-name">
      { user.name }
    </p>
  );
  const logoutTag = (
    <Link
      to="/"
      onClick={ clearLocalStorage }
      data-testid="customer_products__element-navbar-link-logout"
    >
      Logout
    </Link>
  );

  if (user.role === 'customer') {
    return (
      <div>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
        {nameTag}
        {logoutTag}
      </div>
    );
  } if (user.role === 'seller') {
    return (
      <div>
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
        {nameTag}
        {logoutTag}
      </div>
    );
  } if (user.role === 'administrator') {
    return (
      <div>
        <Link
          to="/admin/manage"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Gerenciar Usuarios
        </Link>
        {nameTag}
        {logoutTag}
      </div>
    );
  }
  return null;
}
