const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  logger.error(`${req.method} ${req.originalUrl} - ${err.message}`, { stack: err.stack });
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};

module.exports = errorHandler;