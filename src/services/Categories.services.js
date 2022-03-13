const { Categorie } = require('../models');

const findAll = async () => {
  const user = await Categorie.findAll({ attributes: { exclude: ['password'] } });

  return user;
};

const createCategorie = async (params) => {
  const categorie = await Categorie.create(params);

  return categorie;
};

module.exports = {
  findAll,
  createCategorie,
};
