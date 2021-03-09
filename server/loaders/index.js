 import logger from './logger';
import expressLoader from './express';

export default async ({ app }) => {
  /**
   * Load MongoDB
   */
  /**
   * Load Express essentials
   */
  await expressLoader({ app });
  logger.log('info', 'Express Loader has initialized successfully! ✔️');
};
