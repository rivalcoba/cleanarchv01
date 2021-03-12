/* eslint-disable import/no-unresolved */
// Logger
import mongoose from 'mongoose';
import logger from '@common/logger';

class mongo {
  constructor(url) {
    this.url = url;
  }

  // Methods
  async connect() {
    try {
      mongoose.Promise = global.Promise;
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      mongoose.set('useUnifiedTopology', true);
      await mongoose.connect(this.url);
      logger.log(
        'info',
        'Connection to database engine has successfully established ✅',
      );
    } catch (error) {
      logger.log('error', 'Something went wrong connecting to the database!');
    }
  }
}

export default mongo;
