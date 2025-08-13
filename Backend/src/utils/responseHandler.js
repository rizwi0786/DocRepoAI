// utils/responseHandler.js

/**
 * Success response
 * @param {Object} res - Express response object
 * @param {String} message - Success message
 * @param {Object} [data={}] - Data to send
 * @param {Number} [statusCode=200] - HTTP status code
 */
const success = (res, message, data = {}, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

/**
 * Error response
 * @param {Object} res - Express response object
 * @param {String} message - Error message
 * @param {Number} [statusCode=500] - HTTP status code
 * @param {Object} [errors=null] - Detailed error information
 */
const error = (res, message, statusCode = 500, errors = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors
    });
};

module.exports = {
    success,
    error
};
