/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import logger from '@common/logger';
// import keys from '@config/keys';
import expressLoader from './express';
// import project dependencies
import projectDependencies from './project-dependencies';

export default async ({ app }) => {
  /**
   * Load MongoDB
   */
  // const appDataBase = new MongoDataBase(keys.databaseUrl);
  // appDataBase.connect();
  // Connecting Database
  try {
    // Connecting with the Database
    await projectDependencies.DatabaseService.initDatabase();
    /**
     * Load Express essentials
     */
    expressLoader({ app });
    logger.log('info', 'Express Loader has initialized successfully! ✔️');
  } catch (error) {
    logger.log('error', `db is not ready, err: ${error.message}`);
    console.log(`db is not ready, err:${error.message}`);
  }
};
