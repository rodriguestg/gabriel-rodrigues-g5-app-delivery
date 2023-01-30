import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWith';
import App from '../../App';

describe('Testes na tela de registro', () => {
  const name = 'common_register__input-name';
  const email = 'common_register__input-email';
  const password = 'common_register__input-password';

  const client = 'Cliente Zé Birita';
  const emailClient = 'zebirita@email.com';

  it('Ao clicar no botão "não possuo conta" vai para a rota de registro', async () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/login');

    const buttonRegister = screen.getByRole('button', { name: 'Ainda não tenho conta' });

    userEvent.click(buttonRegister);
    expect(history.location.pathname).toBe('/register');
  });

  it('Aparece mensagem ao tentar fazer Registro com dados inválidos', async () => {
    renderWithRouter(<App />);
    const { history } = renderWithRouter(<App />);
    history.push('/register');

    const inputName = screen.getByTestId(name);
    const inputEmail = screen.getByTestId(email);
    const inputPassword = screen.getByTestId(password);
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(),
    }));

    userEvent.type(inputName, 'usuario');
    userEvent.type(inputEmail, 'email@email');
    userEvent.type(inputPassword, 'senha');

    expect(buttonRegister).toBeDisabled();
  });

  it('Lança mensagem ao tentar cadastrar com nome ou email já cadastrados', async () => {
    renderWithRouter(<App />);
    const { history } = renderWithRouter(<App />);
    history.push('/register');

    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ message: 'conflict' }),
    }));

    userEvent.type(inputName, client);
    userEvent.type(inputEmail, emailClient);
    userEvent.type(inputPassword, 'senhacorreta');

    userEvent.click(buttonRegister);

    const errorMessage = await screen
      .findByTestId('common_register__element-invalid_register');

    expect(errorMessage).toBeInTheDocument();
  });

  it('É possível realizar o registro com dados válidos', async () => {
    renderWithRouter(<App />);
    const { history } = renderWithRouter(<App />);
    history.push('/register');

    const inputName = screen.getByTestId(name);
    const inputEmail = screen.getByTestId(email);
    const inputPassword = screen.getByTestId(password);
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        name: client,
        email: emailClient,
        token: 'eyJhbGciOiJIUzI1NiJ9.Mw.OW7ZXw5IGgg6GVIvvSao2jVyQcDLP2Ld7v9uaYr_b7g',
        role: 'customer',
      }),
    }));

    userEvent.type(inputName, client);
    userEvent.type(inputEmail, emailClient);
    userEvent.type(inputPassword, 'senhacorreta');

    userEvent.click(buttonRegister);
    await screen.findByTestId('customer_products__checkout-bottom-value');
    expect(history.location.pathname).toBe('/customer/products');
  });
});
