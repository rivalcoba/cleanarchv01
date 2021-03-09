// ref: https://medium.com/@alameerashraf/nodejs-a-clean-architecture-931898b00d68
// ref: https://github.com/AlameerAshraf/NodeJS-A-Clean-Archticture-NJCA/blob/master/src/loaders/express.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
// import logger from './loaders/logger';

dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

const app = express();

/**
 * Loading Express
 */
require('./loaders').default({ app });

module.exports = app;
