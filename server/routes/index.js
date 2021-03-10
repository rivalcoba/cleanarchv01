/* eslint-disable import/no-unresolved */
// Indexing Routes
import home from '@routes/home';
import users from '@routes/users';

// Setting Routes to App
export default (app) => {
  // home
  app.use('/', home);

  // users
  app.use('/users', users);
};
