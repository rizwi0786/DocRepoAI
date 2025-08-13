// src/config/jwt.js
module.exports = {
  ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_SECRET,
  REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES || '15m',   // e.g. 15m
  REFRESH_TOKEN_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES || '30d'  // e.g. 30d
};
