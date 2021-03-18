/* eslint-disable import/no-unresolved */
// Implementación concreta del contrato de repositorio de Ideas
import IdeasRepostory from '@contracts/ideas-repository';

export default class InMemoryIdeasRepository extends IdeasRepostory {
  // Class contrusctor
  constructor() {
    super();
    this.ideas = [];
    this.currentId = 1;
    // Functional Members
    this.add = async function add(ideaInstance) {
      return new Promise((resolve, reject) => {
        const idea = ideaInstance;
        try {
          this.currentId += 1;
          idea.id = this.currentId;
          this.ideas.push(idea);
          resolve(idea);
        } catch (error) {
          reject(new Error(`Error Ocurred`));
        }
        return idea;
      });
    };

    this.getAll = async function getAll() {
      return this.ideas;
    };
  }
}
