import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

const Logout = async () => {
  const buttonLogout = screen.getByRole('button', { name: 'Logout' });

  userEvent.click(buttonLogout);

  await screen.findByText('Login');
};

export default Logout;
