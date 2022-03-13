const erreMiddleware = require('./error.middleware');
const generateToken = require('./generateToken');
const validateEmail = require('./validateEmail');
const auth = require('./auth');
const authUser = require('./authUser.middleware');
const validatePostUser = require('./validate.postUser');

module.exports = {
  erreMiddleware,
  generateToken,
  validateEmail,
  auth,
  authUser,
  validatePostUser,
};
