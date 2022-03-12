const jwt = require('jsonwebtoken');
const Service = require('../services/Categories.services');

const { JWT_SECRET } = process.env;

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
  createCategorie,
};
