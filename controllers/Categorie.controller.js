const jwt = require('jsonwebtoken');
const Service = require('../services/Categories.services');

const { JWT_SECRET } = process.env;

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

const createCategorie = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: { code: 401, message: 'Token not found' } });
  }

  const decoded = jwt.verify(authorization, JWT_SECRET);

  req.user = decoded;

  const { name } = req.body;

  const categorie = await Service.createCategorie({ name });

  res.status(201).json(categorie);
};

module.exports = {
  findAll,
  createCategorie,
};
