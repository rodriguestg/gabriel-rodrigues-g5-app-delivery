const { isTokenValid } = require('../service/Auth.service');
const LoginService = require('../service/LoginService');

  const postLogin = async (req, res) => {
    const response = await LoginService.login(req.body);

    if (!response) return res.status(404).json({ message: 'Not found' });

    return res.status(200).json(response);
  };

  const validateToken = (req, res) => {
    const { token } = req.body;
    const result = isTokenValid(token);
    if (result) return res.status(200).json({ message: 'Valid Token' });
    return res.status(403).json({ message: 'Invalid Token' });
  };

  module.exports = { postLogin, validateToken };