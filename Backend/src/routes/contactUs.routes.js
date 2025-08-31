const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUs.controller');
const validate = require('../middlewares/validation.middleware');
const contactUsValidator = require('../validator/contactUs.validator');

// Public route to submit contact form
router.post(
    '/submit-contact-form',
    validate(contactUsValidator.contactForm),
    contactUsController.submitContactForm
);

module.exports = router;