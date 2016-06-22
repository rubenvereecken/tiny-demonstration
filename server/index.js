require('babel-register');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

exports = module.exports = require('./app');
