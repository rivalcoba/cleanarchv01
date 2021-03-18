/* eslint-disable import/no-unresolved */
import DatabaseServices from '@contracts/database-services';
import Idea from '@entities/idea';
import InMemoryIdeasRepository from './in-memory-ideas-repository';

export default class InMemoryDatabaseServices extends DatabaseServices {
  constructor() {
    super();
    this.ideasRepository = new InMemoryIdeasRepository();
    this.initDatabase = async function initDatabase() {
      await this.seedData();
    };
  }

  async seedData() {
    const sampleIdea = new Idea(
      'Fondea tu Colonia',
      'video que muestra como darle un cambio a tu colonia',
      '#',
      new Date(),
    );
    await this.ideasRepository.add(sampleIdea);
  }
}
