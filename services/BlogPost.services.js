const { User, BlogPost, Categorie } = require('../models');

const findAll = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  }); 

  return post;
};

const createPost = async (params, t) => {
  const post = await BlogPost.create(params, { transaction: t });

  return post;
};

module.exports = {
  findAll,
  createPost,
};