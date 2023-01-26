const jwt = require('jsonwebtoken');
const fs = require('fs');

// const JWTPASS = process.env.NODE_ENV || 'JWTPASS';

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const createToken = (id) => jwt.sign(id, secret);

const isTokenValid = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    if (decoded) return true;
  } catch (error) {
    return false;
  }
};

const decodeToken = (token) => {
  try {
    const id = jwt.verify(token, secret);
    return id;
  } catch (error) {
    return undefined;
  }
};

module.exports = { createToken, isTokenValid, decodeToken };