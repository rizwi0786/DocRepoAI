// src/middlewares/role.middleware.js

/**
 * requireRole('admin') or requireRole(['admin','moderator'])
 */
// requireRole(['admin','moderator'])
module.exports = (required) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ success: false, message: 'Unauthorized' });
    // console.log(req.user, required);
  const allowed = Array.isArray(required) ? required : [required];
  if (!allowed.includes(req.user.role)) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  next();
};
