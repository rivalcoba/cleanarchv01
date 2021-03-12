/* eslint-disable import/no-unresolved */
// Importing Use Cases for Idea
import makeAddIdea from '@use-cases/add-idea';

const ideasDb = {};
// Uses Cases
const addIdea = makeAddIdea(ideasDb); // [C]reate
const showAddIdeasForm = null;
const listIdeas = null; // [R]ead
const editIdea = null; // [U]pdate
const showEditIdeasForm = null;
const deleteIdea = null; // [D]elete

const ideaService = Object.freeze({
  addIdea,
  showAddIdeasForm,
  listIdeas,
  editIdea,
  showEditIdeasForm,
  deleteIdea,
});
export default ideaService;
export {
  addIdea,
  showAddIdeasForm,
  listIdeas,
  editIdea,
  showEditIdeasForm,
  deleteIdea,
};
