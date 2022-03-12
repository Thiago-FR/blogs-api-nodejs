const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '6h',
  algorithm: 'HS256',
};

module.exports = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};