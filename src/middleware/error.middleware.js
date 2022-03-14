module.exports = (err, _req, res, _next) => {
  console.error(err);
  if (err.isJoi) {
    const [code, message] = err.details[0].message.split('|');

    return res.status(code).json({ message });
  }

  if (err.statusCode) {
    const { code, message } = err.statusCode;

    return res.status(code).json({ message });
  }

  return res.status(500).json({ message: err.message });
};
