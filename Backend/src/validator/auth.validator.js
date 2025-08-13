// src/validator/auth.validator.js
const Joi = require('joi');

exports.register = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    ))
    .required()
    .messages({
      'string.pattern.base':
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    })
});


exports.login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

exports.forgot = Joi.object({
  email: Joi.string().email().required()
});

exports.reset = Joi.object({
  
  password: Joi.string()
    .pattern(new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    ))
    .required()
    .messages({
      'string.pattern.base':
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    })
});

