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
  categoryIds: Joi.array().max(0).messages({
    'array.max': '400|Categories cannot be edited',
    'array.base': '400|Categories cannot be edited',
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