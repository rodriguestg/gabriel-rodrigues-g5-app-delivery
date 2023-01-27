const registerService = require('../service/registerAdm.service');

const newRegister = async (request, response) => {
    const user = request.body;
    await registerService.newRegister(user);
    response.status(201).json({ message: 'Created' });
};

module.exports = {
  newRegister,
};
