import userEvent from '@testing-library/user-event';

const Logout = async (screen) => {
  const buttonLogout = screen.getByRole('button', { name: 'Logout' });

  userEvent.click(buttonLogout);

  await screen.findByText('Login');
};

export default Logout;
