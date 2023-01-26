const md5 = require('md5');
const { User } = require('../../database/models');
const { createToken } = require('./Auth.service');

const registerUserService = async ({ name, email, password, role }) => {
  const passwordEncrypted = md5(password);
  const newUser = await User.create({ name, email, password: passwordEncrypted, role });
  const token = createToken(newUser.email);
  return token;
};

module.exports = { registerUserService };