const { get } = require('../routes');
const userService = require('../services/user.service');
const responseHandler = require('../utils/responseHandler');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return responseHandler.success(res, users, 'All users fetched successfully');
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        // console.log(req)
        // console.log(`Fetching user with ID: ${id}`);
        const user = await userService.getUserById(userId);
        
        return responseHandler.success(res, user, 'User fetched successfully');
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        return responseHandler.success(res, user, 'User created successfully');
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;

        // Only allow if admin OR updating their own account
        if (req.user.role !== 'Admin' && req.user.user_uuid.toString() !== userId.toString()) {
            return responseHandler.error(res, 'Unauthorized', 403);
        }

        const updated = await userService.updateUser(userId, req.body);
        return responseHandler.success(res, updated, 'User updated successfully');
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params;

        // Only allow if admin OR deleting their own account
        if (req.user.role !== 'Admin' && req.user.user_uuid.toString() !== userId.toString()) {
            return responseHandler.error(res, 'Unauthorized', 403);
        }

        await userService.deleteUser(userId);
        return responseHandler.success(res, null, 'User deleted successfully');
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
};
