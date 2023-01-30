import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

const admin = { email: 'adm@deliveryapp.com', pass: '--adm2@21!!--' };
const seller = { email: 'fulana@deliveryapp.com', pass: 'fulana@123' };
const costumer = { email: 'zebirita@email.com', pass: '$#zebirita#$' };

const mockCostumerLogin = {
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  token: 'eyJhbGciOiJIUzI1NiJ9.Mw.OW7ZXw5IGgg6GVIvvSao2jVyQcDLP2Ld7v9uaYr_b7g',
  role: 'customer',
};

const mockSellerLogin = {
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  token: 'eyJhbGciOiJIUzI1NiJ9.Mg.0wZuGMKzA8hr5dF7PAAVWTBJNkPj6WFDMJQMyWIyhW0',
  role: 'seller',
};

const mockAdminLogin = {
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  token: 'eyJhbGciOiJIUzI1NiJ9.MQ.gaKRuIIRNvXiTlyNPE1Kp3SpAQfhrI3r9MrSB1YdMz8',
  role: 'administrator',
};

const Login = async (role) => {
  const inputEmail = screen.getByTestId('common_login__input-email');
  const inputPassword = screen.getByTestId('common_login__input-password');
  const buttonLogin = screen.getByRole('button', { name: 'Login' });

  if (role === 'seller') {
    userEvent.type(inputEmail, seller.email);
    userEvent.type(inputPassword, seller.pass);
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockSellerLogin),
    }));
  }

  if (role === 'costumer') {
    userEvent.type(inputEmail, costumer.email);
    userEvent.type(inputPassword, costumer.pass);
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockCostumerLogin),
    }));
  }

  if (role === 'admin') {
    userEvent.type(inputEmail, admin.email);
    userEvent.type(inputPassword, admin.pass);
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockAdminLogin),
    }));
  }

  userEvent.click(buttonLogin);

  await screen.findByText('Logout');
};

export default Login;
