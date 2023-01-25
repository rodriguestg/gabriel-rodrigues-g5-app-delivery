const jwt = require('jsonwebtoken');
const fs = require('fs');

// const JWTPASS = process.env.NODE_ENV || 'JWTPASS';

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const createToken = (email) => jwt.sign(email, secret);

const isTokenValid = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    if (decoded) return true;
  } catch (error) {
    return false;
  }
};

module.exports = { createToken, isTokenValid };