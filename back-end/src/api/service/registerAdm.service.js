const md5 = require('md5');
const registerModel = require('../Model/registerAdmModel');

const newRegister = async (user) => {
    const passHash = md5(user.password);
    const register = await registerModel.newRegister({ ...user, password: passHash });
    return register;
};

module.exports = {
  newRegister,
};
