const registerService = require('../service/registerAdm.service');

const newRegister = async (request, response) => {
    const user = request.body;
    const userRegister = await registerService.newRegister(user);
    if (userRegister) {
      response.status(201).json({ message: 'Created' });
    } else {
      response.status(409).json({ message: 'Conflict' });
    }
};

module.exports = {
  newRegister,
};
