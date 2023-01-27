const { registerUserService } = require('../service/registerService');

const registerUserController = async (req, res) => {
  const user = await registerUserService(req.body);
  if (user) {
    return res.status(201).json({token: user});
  }
  return res.status(409).json({ message: 'conflict' });
};

module.exports = { registerUserController };
