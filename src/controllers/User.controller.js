const Service = require('../services/User.services');
const { generateToken } = require('../middleware');

const payloadToken = (data) => ({
  id: data.id,
  displayName: data.displayName,
  email: data.email,    
});

const findAll = async (req, res, _next) => {
  const user = await Service.findAll();
  
  res.status(200).json(user);
};

const findByPk = async (req, res, next) => {
  const { id } = req.params;

  const user = await Service.findByPk(id);

  if (user.statusCode) return next(user);
  
  res.status(200).json(user);
};

const deleteUser = async (req, res, _next) => {
  await Service.deleteUser({ id: req.user.id });

  res.status(204).end();
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await Service.createUser({ displayName, email, password, image });

  const congif = payloadToken(user.dataValues);

  const token = generateToken(congif);

  res.status(201).json({ token });
};

module.exports = {
  findAll,
  findByPk,
  deleteUser,
  createUser,
};