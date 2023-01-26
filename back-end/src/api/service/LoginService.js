const md5 = require('md5');
const { User } = require('../../database/models');
const Auth = require('./Auth.service');

  const login = async ({ email, password }) => {
    if (!email) return undefined;
    const user = await User.findOne({ where: { email } });
    
    if (user) {
      const passwordMd5 = md5(password);
      const correct = passwordMd5 === user.password;

      if (correct) {
        return {
        name: user.name,
        email,
        token: Auth.createToken(user.id),
        role: user.role,
        }; 
      }
    }

    return undefined;
  };

  module.exports = { login };