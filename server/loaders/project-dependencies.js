/* eslint-disable import/no-unresolved */
import InMemoryDatabaseServices from '@frameworks/persistance/in-memory/in-memory-db-services';

export default (() => ({
  DatabaseService: new InMemoryDatabaseServices(),
}))();
