const { registerUserService } = require('../service/registerService');

const registerUserController = async(req, res) => {
  const token = await registerUserService(req.body);
  if (token) return res.status(201).json({ token })
}

module.exports = { registerUserController };