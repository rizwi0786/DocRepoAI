const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const validate = require('../middlewares/validation.middleware');
const userValidator = require('../validator/user.validator');


// Apply authentication to all user routes
router.use(authMiddleware);

router.post(
    '/',
    roleMiddleware('Admin'),
    validate(userValidator.createUser),
    userController.createUser
);

router.get(
    '/',
    roleMiddleware('Admin'),
    userController.getAllUsers
);

router.get(
    '/:userId',
    validate(userValidator.getUserById),
    userController.getUserById
);

router.put(
    '/:userId',
    validate(userValidator.updateUser),
    userController.updateUser
);

router.delete(
    '/:userId',
    validate(userValidator.deleteUser),
    userController.deleteUser
);


module.exports = router;
