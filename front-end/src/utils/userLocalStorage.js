export default getUserLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};
