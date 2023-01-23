export const setUserLocalStorage = (user) => {
  console.log(user);
};

export const getUserLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};
