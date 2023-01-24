const LoginService = require('../service/LoginService');

  const postLogin = async (req, res) => {
    const response = await LoginService.login(req.body);

    if (!response) return res.status(404).json({ message: 'Not found' });

    return res.status(200).json(response);
  };

  module.exports = { postLogin };