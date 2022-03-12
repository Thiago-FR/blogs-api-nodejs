const Sequelize = require('sequelize');
const config = require('../config/config.js');
const Service = require('../services/BlogPost.services');
const ServicePostCategories = require('../services/PostsCategorie.services');

const findAll = async (_req, res, _next) => {
  const post = await Service.findAll();
  
  res.status(200).json(post);
};

const findOne = async (req, res, next) => {
  const { id } = req.params;

  const user = await Service.findOne(id);

  if (user.statusCode) return next(user);
  
  res.status(200).json(user);
};

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
  findAll,
  findOne,
  createPost,
};
