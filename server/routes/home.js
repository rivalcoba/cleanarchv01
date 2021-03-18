import express from 'express';
// Importando el controlador
import HomeController from '@controllers/homeController';

const HomeRouter = (dependencies) => {
  const router = express.Router();
  const homeController = HomeController(dependencies);
  router.route('/').get(homeController.showHome);
  return router;
};

export default HomeRouter;
