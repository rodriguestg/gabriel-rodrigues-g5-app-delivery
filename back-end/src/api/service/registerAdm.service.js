const registerModel = require('../Model/registerAdmModel');
const { createHash } = require('crypto');

const newRegister = async (user) => {
  const DADOS_CRIPTOGRAFAR = {
    algoritmo : 'sha256',
    segredo : 'secret',
    tipo : 'hex'
  };

  const criptografar = (senha) => {
    const hash = createHash(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    hash.update(senha);
    return hash.digest(DADOS_CRIPTOGRAFAR.tipo);
  };

  const passHash = criptografar(user.password)

    const register = await registerModel.newRegister({...user, password: passHash });
    console.log(register);
    return register;
  };

module.exports = {
  newRegister,
};
