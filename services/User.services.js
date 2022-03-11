const { User } = require('../models');

const findAll = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });

  return user;
};

const findOne = async (params) => {
  const user = await User.findOne({ where: params });

  if (!user) {
    return {
      statusCode: { code: 400, message: 'Invalid fields' },
    };
  }

  return user;
};

module.exports = {
  findAll,
  findOne,
};
