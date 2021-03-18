/* eslint-disable import/no-unresolved */
import express from 'express';
// Indexing Routes
import HomeRouter from '@routes/home';

const ApiRouter = (dependencies) => {
  const mainRouter = express.Router();
  // Building HomeRouter with dependencies
  const homeRouter = HomeRouter(dependencies);
  // Routing
  mainRouter.use(['/', '/home'], homeRouter);
  return mainRouter;
};

// Setting Routes to App
export default ApiRouter;
