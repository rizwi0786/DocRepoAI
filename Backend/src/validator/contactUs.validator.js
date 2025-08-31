const Joi = require('joi');

const contactForm = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(10).max(1000).required()
});
module.exports = {
    contactForm
};
