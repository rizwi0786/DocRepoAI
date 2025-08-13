    // src/middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');
const { JWT_ACCESS_SECRET } = require('../config/env'); // or config/jwt.js

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = { 
        sub: payload.sub, 
        role: payload.role, 
        user_uuid: payload.user_uuid, 
        email: payload.email 
        };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
