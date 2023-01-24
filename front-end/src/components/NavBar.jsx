import React from 'react';
import { Link } from 'react-router-dom';
// import getUserLocalStorage from '../utils/userLocalStorage';

export default function NavBar() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const nameTag = (
    <p data-testid="customer_products__element-navbar-user-full-name">
      { name }
    </p>
  );
  const logoutTag = (
    <Link
      to="/"
      data-testid="customer_products__element-navbar-link-logout"
    >
      Logout
    </Link>
  );

  if (role === 'customer') {
    return (
      <div>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/checkout"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
        {nameTag}
        {logoutTag}
      </div>
    );
  } if (role === 'seller') {
    return (
      <div>
        <Link
          to="/customer/checkout"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
        {nameTag}
        {logoutTag}
      </div>
    );
  } if (role === 'administrator') {
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
}
