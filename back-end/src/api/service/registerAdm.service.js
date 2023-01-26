const { createHash } = require('crypto');
const registerModel = require('../Model/registerAdmModel');

const DADOS_CRIPTOGRAFAR = {
  algoritmo: 'sha256',
  segredo: 'secret',
  tipo: 'hex',
};

const criptografar = (senha) => {
const hash = createHash(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
hash.update(senha);
return hash.digest(DADOS_CRIPTOGRAFAR.tipo);
};

const newRegister = async (user) => {
    const passHash = criptografar(user.password);

    let newRole;
    switch (user.role) {
    case 'Vendedor':
      newRole = 'seller';
      break;
    case 'Administrador':
      newRole = 'administrator';
    break;
    default:
      newRole = 'customer';
      break;
    }

   const register = await registerModel.newRegister({ ...user, password: passHash, role: newRole });
    console.log(register);
    return register;
    };

module.exports = {
  newRegister,
};
