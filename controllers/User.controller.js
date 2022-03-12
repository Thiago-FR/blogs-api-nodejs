const Service = require('../services/User.services');
const { generateToken } = require('../middleware');

const payloadToken = (data) => ({
  id: data.id,
  displayName: data.displayName,
  email: data.email,    
});

const findAll = async (req, res) => {
  const user = await Service.findAll();
  res.status(200).json(user);
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
  createUser,
};
