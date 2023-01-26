const registerService = require('../service/registerAdm.service');

const newRegister = async (request, response) => {
    const user = request.body;
    const newRegister = await registerService.newRegister(user);
    response.status(201).json(newRegister);
};

module.exports = {
  newRegister,
};
