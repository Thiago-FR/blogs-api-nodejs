const ServicePost = require('../services/BlogPost.services');

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const post = await ServicePost.findByPk(id);
  
  if (post.statusCode) return next(post);

  const { userId } = post.dataValues;

  if (userId !== req.user.id) {
    return next({
      statusCode: {
        code: 401,
        message: 'Unauthorized user',
      },
    });
  }

  next();
};
