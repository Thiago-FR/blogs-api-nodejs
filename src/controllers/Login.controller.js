const Service = require('../services/User.services');
const { generateToken } = require('../middleware');

const payloadToken = (data) => ({
  id: data.id,
  displayName: data.displayName,
  email: data.email,
});

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const user = await Service.findOne({ email });

  if (user.statusCode) return next(user);

  const congif = payloadToken(user.dataValues);

  const token = generateToken(congif);

  return res.status(200).json({ token });
};
