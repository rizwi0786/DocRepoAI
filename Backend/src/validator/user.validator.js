const Joi = require('joi');

// Reusable UUID schema for params
const uuidParamSchema = Joi.string().uuid({ version: 'uuidv4' }).required();

const createUser = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    ))
    .required()
    .messages({
      'string.pattern.base':
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    }),
  role: Joi.string().valid('Admin', 'User').default('user')
});

const getUserById = Joi.object({
  params: Joi.object({
    userId: uuidParamSchema
  })
});

const updateUser = Joi.object({
  params: Joi.object({
    userId: uuidParamSchema
  }),
  
    name: Joi.string().min(3).max(30).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string()
    .pattern(new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    ))
    .optional()
    .messages({
      'string.pattern.base':
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    }),
    role: Joi.string().valid('admin', 'user').optional()

}).min(1);

const deleteUser = Joi.object({
  params: Joi.object({
    userId: uuidParamSchema
  })
});

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
