// ref: https://roystack.home.blog/2019/10/22/node-clean-architecture-deep-dive/
// ref: https://github.com/royib/clean-architecture-node
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
// import logger from './loaders/logger';

dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

// Creating Express Instance
const app = express();

/**
 * Loading Express configurations
 */
require('./loaders').default({ app });

export default app;
