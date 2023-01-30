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

    await Login('seller');

    expect(history.location.pathname).toBe('/seller/orders');

    await Logout();
  });

  it('Role Costumer Login', async () => {
    const { history } = renderWithRouter(<App />);

    await Login('costumer');

    expect(history.location.pathname).toBe('/customer/products');

    await Logout();
  });

  it('Role Admin Login', async () => {
    const { history } = renderWithRouter(<App />);

    await Login('admin');

    expect(history.location.pathname).toBe('/admin/manage');

    await Logout();
  });

  it('Aparece mensagem ao tentar fazer Login com dados inválidos', async () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const buttonLogin = screen.getByRole('button', { name: 'Login' });

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ message: 'Not found' }),
    }));

    userEvent.type(inputEmail, 'emailnaocadastrado@email.com');
    userEvent.type(inputPassword, 'senhaqualquer');

    userEvent.click(buttonLogin);

    const errorMessage = await screen.findByTestId('common_login__element-invalid-email');

    expect(errorMessage).toBeInTheDocument();
  });
});
