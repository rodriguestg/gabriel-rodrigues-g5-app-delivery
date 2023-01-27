const { Op } = require('sequelize');
const { User } = require('../../database/models');

const newRegister = async (newUser) => {
  const user = await User.findOne({ where: {
    [Op.or]: [{ name: newUser.fullName }, { email: newUser.email }] } });
  if (!user) {
    try {      
      const register = await User.create({
        name: newUser.fullName,
        email: newUser.email,
        password: newUser.password,
      role: newUser.role,
    });
    return register;
  } catch (error) {
    console.log(error);
  }
}
};

module.exports = {
  newRegister,
};
