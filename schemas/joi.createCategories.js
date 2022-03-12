const Joi = require('joi');

const validateJoi = (name) => {
  const { error } = Joi.object({
    name: Joi.string().required().messages({
      'any.required': '400|"name" is required',
      'string.empty': '400|"name" is not allowed to be empty',
    }),
  }).validate({ name });

  return error;
};

module.exports = (req, _res, next) => {
  const { name } = req.body;
  const error = validateJoi(name);

  if (error) return next(error);

  next();
};