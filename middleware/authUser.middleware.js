module.exports = (req, _res, next) => {
  const { id } = req.params;
  if (id !== req.user.id.toString()) {
    return next({
      statusCode: {
        code: 401,
        message: 'Unauthorized user',
      },
    });
  }

  next();
};
