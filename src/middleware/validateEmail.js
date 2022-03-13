const { User } = require('../models');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    return next({
      statusCode: { code: 409, message: 'User already registered' },
    });
  }

  next();
};
