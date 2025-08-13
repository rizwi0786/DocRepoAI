// src/models/refresh.model.js
const { callDbFunction } = require('../utils/dbFunctionCaller');

const createRefreshToken = async (userId, token) => { return await callDbFunction('create_refresh_token', [userId, token]); }

const getRefreshToken = async (token) => { return await callDbFunction('get_refresh_token', [token]); }

const revokeRefreshToken = async (token) => { return await callDbFunction('revoke_refresh_token', [token]); }

const revokeAllForUser = async (userId) => { return await callDbFunction('revoke_all_refresh_tokens_for_user', [userId]); }

module.exports = {
    createRefreshToken,
    getRefreshToken,
    revokeRefreshToken,
    revokeAllForUser
};
