const jwt = require('jsonwebtoken');
const Service = require('../services/User.services');
const { generateToken } = require('../middleware');

const { JWT_SECRET } = process.env;

const payloadToken = (data) => ({
  id: data.id,
  displayName: data.displayName,
  email: data.email,    
});

const findAll = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: { code: 401, message: 'Token not found' } });
  }

  const decoded = jwt.verify(authorization, JWT_SECRET);

  req.user = decoded;

  const user = await Service.findAll();
  
  res.status(200).json(user);
};

const findByPk = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: { code: 401, message: 'Token not found' } });
  }

  const decoded = jwt.verify(authorization, JWT_SECRET);

  req.user = decoded;

  const { id } = req.params;

  const user = await Service.findByPk(id);

  if (user.statusCode) return next(user);
  
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
  findByPk,
  createUser,
};
