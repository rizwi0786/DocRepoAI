const contactUsModel = require('../models/contactUs.model');
const emailService = require('./email.service');


const submitContactForm = async ({ name, email, message }) => {
    // Save to DB
    await contactUsModel.sendContactUSform(name, email, message);   

    // Send email to admin
    await emailService.sendAdminContactEmail(name, email, message);
    // Send confirmation email to user
    await emailService.sendUserConfirmationEmail(name, email);
    return  'Contact form submitted successfully' 

}
module.exports = {
    submitContactForm
};