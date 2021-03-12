import idea from '@entities/idea';

export default ( ideasDb ) => {
  /**
   * @param {string} title - The title of the note.
   * @param {string} detail - The content of the note.
   * @param {string} user - The owner's id of the note.
   * @param {Date} date - Date of note creation.
   * @param {string} id - id of note in Database.
   * @returns {function} The function that create a new comment
   */
  async function execute(title, detail, user, date, id){
    // Check if this idea exist
    // Validate
    // Create new Idea
    // Persist new Idea
    return { message: 'idea added succesfully' };
  }
  return { execute };
};
