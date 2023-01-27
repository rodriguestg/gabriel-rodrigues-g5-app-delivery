const { User } = require('../../database/models');

const newRegister = async (newUser) => {
  const register = await User.create({
    name: newUser.fullName,
    email: newUser.email,
    password: newUser.password,
    role: newUser.role,
  });
  return register;
};

module.exports = {
  newRegister,
};
