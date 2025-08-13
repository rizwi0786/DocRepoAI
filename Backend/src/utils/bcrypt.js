// src/utils/bcrypt.js
const bcrypt = require('bcrypt');

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);

exports.hash = async (plain) => {
  return await bcrypt.hash(plain, SALT_ROUNDS);
};

exports.compare = async (plain, hash) => {
  return await bcrypt.compare(plain, hash);
};
