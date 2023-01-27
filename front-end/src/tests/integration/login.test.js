import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWith';
import App from '../../App';
import Login from '../utils/Login';
import Logout from '../utils/Logout';

describe('Testes no Login', () => {
  it('Role Seller Login', async () => {
    const { history } = renderWithRouter(<App />);

    await Login('seller', screen);

    expect(history.location.pathname).toBe('/seller/orders');

    await Logout(screen);
  });

  it('Role Costumer Login', async () => {
    const { history } = renderWithRouter(<App />);

    await Login('costumer', screen);

    expect(history.location.pathname).toBe('/customer/products');

    await Logout(screen);
  });

  it('Role Admin Login', async () => {
    const { history } = renderWithRouter(<App />);

    await Login('admin', screen);

    expect(history.location.pathname).toBe('/admin/manage');

    await Logout(screen);
  });
});
