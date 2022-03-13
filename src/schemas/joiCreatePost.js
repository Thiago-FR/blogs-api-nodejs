const Joi = require('joi');

const attributes = {
  title: Joi.string().required().messages({
    'any.required': '400|"title" is required',
    'string.empty': '400|"title" is not allowed to be empty',
  }),
  content: Joi.string().required().messages({
    'any.required': '400|"content" is required',
    'string.empty': '400|"content" is not allowed to be empty',
  }),
  categoryIds: Joi.array().min(1).required().messages({
    'any.required': '400|"categoryIds" is required',
    'array.base': '400|"categoryIds" must be an array',
    'array.min': '400|"categoryIds" must contain at least 1 items',
  }),
};

const validateJoi = (title, content, categoryIds) => {
  const { error } = Joi.object(attributes).validate({ title, content, categoryIds });

  return error;
};

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const error = validateJoi(title, content, categoryIds);

  if (error) return next(error);

  next();
};