const joiLogin = require('./joi.login');
const joiCreate = require('./joi.create');
const joiCreateCategories = require('./joi.createCategories');
const joiCreatePost = require('./joiCreatePost');
const joiUpdatePost = require('./joiUpdatePost');

module.exports = {
  joiLogin,
  joiCreate,
  joiCreateCategories,
  joiCreatePost,
  joiUpdatePost,
};
