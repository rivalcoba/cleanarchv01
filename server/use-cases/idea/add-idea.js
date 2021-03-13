/* eslint-disable import/no-unresolved */
import Idea from '@entities/idea';

export default (ideaRepository) => {
  /**
   * @param {string} title - The title of the note.
   * @param {string} detail - The content of the note.
   * @param {string} user - The owner's id of the note.
   * @param {Date} date - Date of note creation.
   * @param {string} id - id of note in Database.
   * @returns {function} The function that create a new comment
   */
  async function execute(title, detail, user) {
    // [NOT APPLY] Check if this idea exist
    // Validate TODO: Use YUP
    if (!title || !detail || !user) {
      throw new Error('add-idea validation failed');
    }
    // Create new Idea
    let newIdea = new Idea(title, detail, user);

    // Persist new Idea
    newIdea = await ideaRepository.add(newIdea);

    // Returning result
    return { message: 'idea added succesfully', newIdea };
  }
  return { execute };
};
