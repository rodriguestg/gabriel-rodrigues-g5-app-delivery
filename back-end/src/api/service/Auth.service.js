const jwt = require('jsonwebtoken');
require('dotenv');

const JWTPASS = process.env.NODE_ENV || 'JWTPASS';

  const createToken = (email) => jwt.sign(email, JWTPASS);

module.exports = { createToken };