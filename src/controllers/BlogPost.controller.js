const Sequelize = require('sequelize');
const config = require('../config/config');
const Service = require('../services/BlogPost.services');
const ServicePostCategories = require('../services/PostsCategorie.services');

const getSearch = async (req, res, _next) => {
  const { q } = req.query;

  const post = await Service.getSearch(q);

  return res.status(200).json(post);
};

const findAll = async (_req, res, _next) => {
  const post = await Service.findAll();

  return res.status(200).json(post);
};

const findOne = async (req, res, next) => {
  const { id } = req.params;

  const user = await Service.findOne(id);

  if (user.statusCode) return next(user);

  return res.status(200).json(user);
};

const updatePost = async (req, res, _next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  await Service.updatePost({ title, content }, { id });

  const user = await Service.findOne(id);

  return res.status(200).json({
    title, content, userId: req.user.id, categories: user.categories,
  });
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;

  const post = await Service.deletePost({ id });

  if (post.statusCode) return next(post);

  return res.status(204).end();
};

const createPost = async (req, res, next) => {
  const sequelize = new Sequelize(config.development);
  const t = await sequelize.transaction();

  const { title, content, categoryIds } = req.body;

  try {
    const categorie = await Service.createPost({ title, content, userId: req.user.id }, t);

    await ServicePostCategories.createPostsCategorie(categorie.dataValues, categoryIds, t);

    await t.commit();

    return res.status(201).json(categorie);
  } catch (error) {
    await t.rollback();

    return next({ statusCode: { code: 400, message: '"categoryIds" not found' } });
  }
};

module.exports = {
  getSearch,
  findAll,
  findOne,
  updatePost,
  deletePost,
  createPost,
};
