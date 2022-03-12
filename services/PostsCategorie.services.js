const { PostsCategorie } = require('../models');

const createPostsCategorie = async (dataValue, categoryIds, t) => {
  const promise = categoryIds.map((id) => 
    PostsCategorie.create({ postId: dataValue.id, categoryId: id }, { transaction: t }));

  await Promise.all(promise);
};

module.exports = {
  createPostsCategorie,
};
