/* eslint-disable no-unused-vars */
export default class IdeasRepository {
  constructor() {
    this.add = function add(ideaInstance) {
      return Promise.reject(new Error('IdeasRepository add not implemented'));
    };
    this.update = function update(ideaInstance) {
      return Promise.reject(
        new Error('IdeasRepository update not implemented'),
      );
    };
    this.erase = function erase(ideaInstance) {
      return Promise.reject(new Error('IdeasRepository not implemented'));
    };
    this.getAll = function getAll(ideaInstance) {
      return Promise.reject(new Error('IdeasRepository not implemented'));
    };
  }
}
