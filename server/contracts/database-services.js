export default class DatabaseServices {
  constructor() {
    this.ideaRepository = null;
    this.initDatabase = function initDatabase() {
      return Promise.reject(new Error('not implemented'));
    };
  }
}
