const registerService = require('../service/registerAdm.service');

const newRegister = async (request, response) => {
    const user = request.body;
    const newRegister2 = await registerService.newRegister(user);
    console.log(newRegister2);
    response.status(201).json({ message: 'Created' });
};

module.exports = {
  newRegister,
};
