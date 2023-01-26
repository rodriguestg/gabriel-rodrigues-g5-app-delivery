const { createHash } = require('crypto');

function encrypter(password)  {
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
  
  return criptografar(password)
}

module.exports = {
  encrypter
}