/* eslint-disable no-console */
const bcrypt = require('bcryptjs');
const jwtoken = require('jsonwebtoken');

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 8);
  return hash;
};

const validatePassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

// eslint-disable-next-line arrow-body-style
const generateToken = async (username, secret, duration) => {
  const token = await jwtoken.sign({ username }, secret, { expiresIn: duration });
  return token;
};

const validateToken = async (token, secret) => {
  const payload = await jwtoken.verify(token, secret);
  return payload;
};

module.exports = {
  hashPassword,
  validatePassword,
  generateToken,
  validateToken,
};
