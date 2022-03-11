const Service = require('../services/User.services');

const findAll = async (req, res) => {
  const user = await Service.findAll();
  res.status(200).json(user);
};

module.exports = {
  findAll,
};
