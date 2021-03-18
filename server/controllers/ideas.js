/* eslint-disable import/no-unresolved */
// Importing use cases
import ideaUsesCases from '@use-cases/Idea/index';

export default (dependencies) => {
  const { ideaRepository } = dependencies.DatabaseService;

  const addNewIdea = async (req, res, next) => {
    // Init use case
    const AddIdeaCommand = ideaUsesCases.addIdea(ideaRepository);

    // Extract idea from request
    const { title, details } = req.body;
    const user = req.user.id;

    // Call use case
    try {
      const response = await AddIdeaCommand.execute(title, details, user);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  return {
    addNewIdea,
  };
};
