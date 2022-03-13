const erreMiddleware = require('./error.middleware');
const generateToken = require('./generateToken');
const validateEmail = require('./validateEmail');
const auth = require('./auth');
const validatePostUser = require('./authPost.middleware');

module.exports = {
  erreMiddleware,
  generateToken,
  validateEmail,
  auth,
  validatePostUser,
};
