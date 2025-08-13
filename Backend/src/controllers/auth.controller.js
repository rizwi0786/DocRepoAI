// src/controllers/auth.controller.js
const authService = require('../services/auth.service');
const responseHandler = require('../utils/responseHandler');
const logger = require('../config/logger');

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    responseHandler.success(res, { user }, 201);
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
    console.log('Fetching all users controller');
  
    const users = await authService.getAllUsers();
    console.log('Users fetched:', users);
    responseHandler.success(res, { users }, 200);       
    
};

exports.login = async (req, res, next) => {
  try {
    // console.log('Login request body:', req.body);
    const { user, accessToken, refreshToken } = await authService.login(req.body);

    // Set HttpOnly cookie for refresh token (recommended for browsers)
    if (process.env.NODE_ENV === 'production') {
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: parseExpiryCookieMs(process.env.JWT_REFRESH_EXPIRES || '30d')
      });
      // send access token in body
      responseHandler.success(res, { user, accessToken });
    } else {
      // dev: return both tokens in body
      responseHandler.success(res, { user, accessToken, refreshToken });
    }
  } catch (err) {
    next(err);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    // try cookie first, otherwise body
    const token = req.cookies?.refreshToken || req.body.refreshToken;
    const tokens = await authService.refresh(token);
    responseHandler.success(res, tokens);
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const token = req.cookies?.refreshToken || req.body.refreshToken;
    await authService.logout(token);
    // clear cookie
    res.clearCookie('refreshToken');
    responseHandler.success(res, { message: 'Logged out' });
  } catch (err) {
    next(err);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const origin = req.get('origin') || process.env.FRONTEND_URL;
    await authService.forgotPassword(req.body.email, origin);
    // always return same message to avoid user enumeration
    responseHandler.success(res, { message: 'If an account exists, a reset link was sent' });
  } catch (err) {
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const token = req.query.token; // get token from query string
    const { password } = req.body; // password from body
    // console.log('Reset password request:', { token, password });
    await authService.resetPassword(token, password);
    responseHandler.success(res, { message: 'Password reset successful' });
  } catch (err) {
    next(err);
  }
};

// helper
function parseExpiryCookieMs(exp) {
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

