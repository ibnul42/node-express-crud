const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(400).json({
    message: err.message,
    stack: process.env.NODE_ENV === "Production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
