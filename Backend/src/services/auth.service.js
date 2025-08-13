// src/services/auth.service.js
const crypto = require('crypto');
const userModel = require('../models/user.model');
const refreshModel = require('../models/refreshToken.model');
const bcrypt = require('../utils/bcrypt');
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken
} = require('../utils/generateTokens');
const emailService = require('./email.service');
const logger = require('../config/logger');




// Register
const register = async ({ name, email, password }) => {
  const existing = await userModel.getUserByEmail(email);
//   console.log(existing);
  if (existing.length > 0) {
    // console.log('Why');
    const err = new Error('User already exists');
    err.status = 409;
    throw err;
  }
  const hashed = await bcrypt.hash(password);
  const user = await userModel.createUser(name, email, hashed, 'user');
  await emailService.sendWelcomeEmail(email, name || user.name);

  return user;
};

// Get All Users
const getAllUsers = async () => {
  console.log('Fetching all users services');
  const users = await userModel.getAllUser();
  console.log('All users fetched successfully');
  return users;
};

// Login
const login = async ({ email, password }) => {
  const userdata = await userModel.getUserByEmail(email);
    //  console.log('User found:', user);
  if (userdata.length === 0) {
    const err = new Error('Invalid Email');
    err.status = 401;
    throw err;
  }
  user = userdata[0];
//   console.log('User found:', user);
  const ok = await bcrypt.compare(password, user.password_hash );
//   console.log('Password match:', ok);
  if (!ok) {
    const err = new Error('Wrong Password');
    err.status = 401;
    throw err;
  }

  const payload = { sub: user.user_id, role: user.role, user_uuid: user.user_uuid , email: user.email };
//   console.log('Payload created:', payload);
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  await refreshModel.createRefreshToken(user.user_uuid, refreshToken);
  return { user, accessToken, refreshToken };
};

// Refresh
const refresh = async (token) => {
    // console.log('Refreshing token:', token);
  if (!token) {
    const err = new Error('No token provided');
    err.status = 401;
    throw err;
  }

  let payload;
  
  try {
    payload = verifyRefreshToken(token);
} catch (e) {
    //   console.log('Payload verified:', payload);
    const err = new Error('Invalid refresh token');
    err.status = 401;
    throw err;
  }
//   console.log(payload);

  const row = await refreshModel.getRefreshToken(token);
    console.log('Refresh token row:', row);
  if (!row) {
    const err = new Error('Refresh token revoked or not found');
    // console.log('No row found for token:', token);  
    err.status = 401;
    throw err;
  }
  const newPayload = { 
  sub: payload.sub, 
  role: payload.role, 
  user_uuid: payload.user_uuid, 
  email: payload.email 
};

  const newAccess = signAccessToken(newPayload);
  return { accessToken: newAccess };
};

// Logout
const logout = async (token) => {
    console.log('Logging out token:', token);
    if (!token || token === "") {
        const err = new Error('No refresh token provided');
        err.status = 400;
        throw err;
    }
    const row = await refreshModel.getRefreshToken(token);
    // console.log('Refresh token row for logout:', row);
    if (row.length===0) {
        // console.log('No row found for token:', token);
        const err = new Error('Refresh token not found or already revoked');
        err.status = 400;
        throw err;
    }
    await refreshModel.revokeRefreshToken(token);
};

// Forgot password
const forgotPassword = async (email, origin) => {
  const user = await userModel.getUserByEmail(email);
  if (user.length === 0) {
    return; // silent fail for security
  }

  const token = crypto.randomBytes(32).toString('hex');
  const isfound = await userModel.setPasswordResetToken(user[0].user_uuid, token);

  const resetLink = `${origin}/reset-password?token=${token}`;
  await emailService.sendPasswordReset(email, resetLink);
};

// Reset password
const resetPassword = async (token, newPassword) => {
  const row = await userModel.findByResetToken(token);
  if (row.length === 0) {
    const err = new Error('Invalid or expired token');
    err.status = 400;
    throw err;
  }

  const hashed = await bcrypt.hash(newPassword);
  const updated = await userModel.resetPasswordWithToken(token, hashed);
//   if (!updated) {
//     const err = new Error('Unable to reset password');
//     err.status = 400;
//     throw err;
//   }

  await refreshModel.revokeAllForUser(row.user_id);
};

function parseExpiryToMs(exp) {
  const match = /^(\d+)([smhd])$/.exec(exp);
  if (!match) return 0;
  const n = parseInt(match[1], 10);
  const unit = match[2];
  switch (unit) {
    case 's': return n * 1000;
    case 'm': return n * 60 * 1000;
    case 'h': return n * 60 * 60 * 1000;
    case 'd': return n * 24 * 60 * 60 * 1000;
    default: return 0;
  }
}

module.exports = {
  register,
  login,
  refresh,
  logout,
  forgotPassword,
  resetPassword,
  getAllUsers
};
