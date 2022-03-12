const { User, BlogPost, Categorie } = require('../models');

const findAll = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  }); 

  return post;
};

const findOne = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return {
      statusCode: {
        code: 404,
        message: 'Post does not exist',
      },
    };
  }

  return post;
};

const createPost = async (params, t) => {
  const post = await BlogPost.create(params, { transaction: t });

  return post;
};

module.exports = {
  findAll,
  findOne,
  createPost,
};