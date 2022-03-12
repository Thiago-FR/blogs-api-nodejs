const { User } = require('../models');

const findAll = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });

  return user;
};

const findByPk = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return {
      statusCode: {
        code: 404,
        message: 'User does not exist',
      },
    };
  }

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

const createUser = async (params) => {
  const user = await User.create(params);

  return user;
};

module.exports = {
  findAll,
  findOne,
  findByPk,
  createUser,
};
