const Joi = require('joi');

const validateJoi = (email, password) => {
  const { error } = Joi.object({
    email: Joi.string().required().messages({
      'any.required': '400|"email" is required',
      'string.empty': '400|"email" is not allowed to be empty',
    }),
    password: Joi.string().required().messages({
      'any.required': '400|"password" is required',
      'string.empty': '400|"password" is not allowed to be empty',
    }),
  }).validate({ email, password });

  return error;
};

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  const error = validateJoi(email, password);

  if (error) return next(error);

  next();
};