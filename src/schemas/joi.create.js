const Joi = require('joi');

const attributes = {
  displayName: Joi.string().min(8).required().messages({
    'any.required': '400|"displayName" is required',
    'string.empty': '400|"displayName" is not allowed to be empty',
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '400|"email" is required',
    'string.empty': '400|"email" is not allowed to be empty',
    'string.email': '400|"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
    'string.min': '400|"password" length must be 6 characters long',
  }),
  image: Joi.string().required().messages({
    'any.required': '400|"image" is required',
    'string.empty': '400|"image" is not allowed to be empty',
  }),
};

const validateJoi = (displayName, email, password, image) => {
  const { error } = Joi.object(attributes).validate({ displayName, email, password, image });

  return error;
};

module.exports = (req, _res, next) => {
  const { displayName, email, password, image } = req.body;
  const error = validateJoi(displayName, email, password, image);

  if (error) return next(error);

  next();
};