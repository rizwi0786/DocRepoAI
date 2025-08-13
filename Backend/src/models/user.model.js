const { callDbFunction } = require('../utils/dbFunctionCaller');

const createUser = async (name, email, passwordHash, role = 'user') => {
    return await callDbFunction('create_user', [name, email, passwordHash, role]);
}

const getAllUser = async () => {
    return await callDbFunction('get_all_users', []);
};


const getUserById = async (id) => {
    return await callDbFunction('get_user_by_id', [id]);
}

const getUserByEmail = async (email) => {
    return await callDbFunction('get_user_by_email', [email]);
}

const updateUser = async (id, name, email, passwordHash) => {
    return await callDbFunction('update_user', [id, name, email, passwordHash]);
};

const deleteUser = async (id) => {
    return await callDbFunction('delete_user', [id]);
};


const setPasswordResetToken = async (userId, token) => { return await callDbFunction('set_password_reset_token', [userId, token]); }

const findByResetToken = async (token) => { return await callDbFunction('find_user_by_reset_token', [token]); }

const resetPasswordWithToken = async (token, newPasswordHash) => { return await callDbFunction('reset_password_with_token', [token, newPasswordHash]); }


module.exports = {
    createUser,
    getUserById,
    getUserByEmail,
    setPasswordResetToken,
    findByResetToken,
    resetPasswordWithToken,
    getAllUser,
    updateUser,
    deleteUser
};


