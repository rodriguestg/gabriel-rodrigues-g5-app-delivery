const registerModel = require('../Model/registerAdmModel');
const md5 = require('md5');

const newRegister = async (user) => {
    const passHash = md5(user.password);
    console.log(user);

   const register = await registerModel.newRegister({ ...user, password: passHash });
    console.log(register);
    return register;
    };

module.exports = {
  newRegister,
};
