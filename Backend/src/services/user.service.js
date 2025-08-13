const userModel = require('../models/user.model');
const bcrypt = require('../utils/bcrypt');
const emailService = require('./email.service');

const getAllUsers = async () => {
    const users = await userModel.getAllUser();
    if (!users || users.length === 0) {
        const err = new Error('No users found');
        err.status = 404;
        throw err;
    }
    return users;
};

const getUserById = async (id) => {
    const user = await userModel.getUserById(id);
    if (user.length === 0) {
        const err = new Error('User not found');
        err.status = 404;
        throw err;
    }
    return user;
};

const createUser = async ({ name, email, password, role }) => {
    const existing = await userModel.getUserByEmail(email);
    //   console.log(existing);
      if (existing.length > 0) {
        // console.log('Why');
        const err = new Error('User already exists');
        err.status = 409;
        throw err;
      }
      const hashed = await bcrypt.hash(password);
      const user = await userModel.createUser(name, email, hashed, role);
      await emailService.sendWelcomeEmail(email, name || user.name);
    
      return user;
};

const updateUser = async (id, { name, email, password }) => {
    const user = await userModel.getUserById(id);
    if (user.length === 0) {
        const err = new Error('User not found');
        err.status = 404;
        throw err;
    }
    const hashedPassword = password ? await bcrypt.hash(password) : user[0].password_hash;

    console.log(hashedPassword);
    const updatedUser = await userModel.updateUser(id, name || user[0].name, email || user[0].email, hashedPassword);
    if (!updatedUser) {
        const err = new Error('Failed to update user');
        err.status = 500;
        throw err;
    }
    return updatedUser;
};

const deleteUser = async (id) => {
    const user = await userModel.getUserById(id);
    if (!user) {
        const err = new Error('User not found');
        err.status = 404;
        throw err;
    }
    const deleted = await userModel.deleteUser(id);
    if (!deleted) {
        const err = new Error('Failed to delete user');
        err.status = 500;
        throw err;
    }
    return { message: 'User deleted successfully' };
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
};
