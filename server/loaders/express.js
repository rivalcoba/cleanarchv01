/* eslint-disable import/no-unresolved */
import morgan from 'morgan';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import path from 'path';
import express from 'express';
// Routes
import router from '@routes/index';
// Logger
import logger from '@common/logger';
// Webpack modules
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.dev.config';

// export default loggerInstance;

export default ({ app }) => {
  const env = process.env.NODE_ENV || 'development';
  /**
   * Enable Webpack middleware
   */
  // Primero entrara en funcionamiento
  if (env === 'development') {
    logger.log('info', 'Executing in Development: Webpack Hot reloading! ✔️');
    // Agregando la ruta del HMR
    // reload=true:Enable auto reloading when changing JS files or content
    // timeout=1000:Time from disconnecting from server to reconnecting
    webpackConfig.entry = [
      'webpack-hot-middleware/client?reload=true&timeout=1000',
      webpackConfig.entry,
    ];

    // Agregar el plugin a la configuración de desarrollo
    // de webpack
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    // Creando el compilador
    const compiler = webpack(webpackConfig);

    // Habilitando el middleware en express
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
      }),
    );
    // Habilitando el "Webpack Hot Middleware"
    app.use(webpackHotMiddleware(compiler));
  } else {
    logger.log('info', 'Executing in Production!');
  }

  /**
   * Enable Morgan Logger
   */
  app.use(morgan('dev'));

  /**
   * view engine setup
   */
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'hbs');

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../../public')));

  // Adding Routes
  router.route(app);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
};
