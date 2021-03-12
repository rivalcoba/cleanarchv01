/* eslint-disable import/no-unresolved */
import logger from '@common/logger';
import keys from '@config/keys';
import expressLoader from './express';
import MongoDataBase from './mongo';

export default async ({ app }) => {
  /**
   * Load MongoDB
   */
  const appDataBase = new MongoDataBase(keys.databaseUrl);
  appDataBase.connect();

  /**
   * Load Express essentials
   */
  await expressLoader({ app });
  logger.log('info', 'Express Loader has initialized successfully! ✔️');
};
