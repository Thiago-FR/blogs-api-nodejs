const Service = require('../services/Categories.services');

const findAll = async (_req, res, _next) => {
  const user = await Service.findAll();

  return res.status(200).json(user);
};

const createCategorie = async (req, res, _next) => {
  const { name } = req.body;

  const categorie = await Service.createCategorie({ name });

  return res.status(201).json(categorie);
};

module.exports = {
  findAll,
  createCategorie,
};
