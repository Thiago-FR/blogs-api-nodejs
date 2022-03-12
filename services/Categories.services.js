const { Categorie } = require('../models');

const createCategorie = async (params) => {
  const categorie = await Categorie.create(params);

  return categorie;
};

module.exports = {
  createCategorie,
};
