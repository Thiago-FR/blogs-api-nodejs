const erreMiddleware = require('./error.middleware');
const generateToken = require('./generateToken');
const validateEmail = require('./validateEmail');
const auth = require('./auth');

module.exports = {
  erreMiddleware,
  generateToken,
  validateEmail,
  auth,
};
