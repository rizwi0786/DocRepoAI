// src/routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validation.middleware');
const authValidator = require('../validator/auth.validator');

// auth
// router.get('/me', authController.getMe); // Get current user info
router.get('/users', authController.getAllUsers); // Get all users, protected route
router.post('/register', validate(authValidator.register), authController.register);
router.post('/login', validate(authValidator.login), authController.login);
router.post('/refresh', authController.refresh); // can use validate if you accept body
router.post('/logout', authController.logout);

router.post('/forgot-password', validate(authValidator.forgot), authController.forgotPassword);
router.post('/reset-password', validate(authValidator.reset), authController.resetPassword);

module.exports = router;
