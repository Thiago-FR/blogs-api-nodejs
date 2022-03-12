const { BlogPost } = require('../models');

const createPost = async (params, t) => {
  const post = await BlogPost.create(params, { transaction: t });

  return post;
};

module.exports = {
  createPost,
};