const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const config = require('../config/config.js');
const Service = require('../services/BlogPost.services');
const ServicePostCategories = require('../services/PostsCategorie.services');

const { JWT_SECRET } = process.env;

const createPost = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: { code: 401, message: 'Token not found' } });
  }

  const decoded = jwt.verify(authorization, JWT_SECRET);

  req.user = decoded;

  const sequelize = new Sequelize(config.development);
  const t = await sequelize.transaction();

  const { title, content, categoryIds } = req.body;

  try {
    const categorie = await Service.createPost({ title, content, userId: decoded.id }, t);

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
