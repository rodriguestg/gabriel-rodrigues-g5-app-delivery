const { User } =  require('../../database/models');
const { createToken } = require('./Auth.service');
const md5 = require('md5');
const { Op } = require('sequelize');

const registerUserService = async({ name, email, password, role }) => {
  const user = await User.findOne({ where: {
    [Op.or]: [{ name}, { email}] } });
  const passwordEncrypted = md5(password);
  if (!user) {
    try {
      const newUser = await User.create({ name, email, password: passwordEncrypted, role } );
      return createToken(newUser.email);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = { registerUserService };
