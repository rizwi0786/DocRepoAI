const contactUsservice = require('../services/contactUs.service');
const responseHandler = require('../utils/responseHandler');
const logger = require('../config/logger');



const submitContactForm = async (req, res, next) => {
    try {
        const result = await contactUsservice.submitContactForm(req.body);
        logger.info('Contact form submitted successfully');
        return responseHandler.success(res, result, 'Contact form submitted successfully with DB save and emails sent');
    } catch (err) {
        next(err);
    }   
};

module.exports = {
    submitContactForm
};