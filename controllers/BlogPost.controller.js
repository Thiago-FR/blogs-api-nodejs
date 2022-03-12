const Sequelize = require('sequelize');
const config = require('../config/config.js');
const Service = require('../services/BlogPost.services');
const ServicePostCategories = require('../services/PostsCategorie.services');

const createPost = async (req, res, next) => {
  const sequelize = new Sequelize(config.development);
  const t = await sequelize.transaction();

  const { title, content, categoryIds } = req.body;

  try {
    const categorie = await Service.createPost({ title, content, userId: req.user.id }, t);

    await ServicePostCategories.createPostsCategorie(categorie.dataValues, categoryIds, t);

    await t.commit();

    res.status(201).json(categorie);
  } catch (error) {
    await t.rollback();

    return next({ statusCode: { code: 400, message: '"categoryIds" not found' } });
  }  
};

module.exports = {
  createPost,
};
