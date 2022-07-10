const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  postNewThought,
  putUpdateThoughtById,
  deleteThoughtById,
  postReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router
  .route('/')
  //GET all thoughts
  .get(getAllThoughts)
  //POST to create a new thought (don't forget to push the created thought's _id to the 
  //associated user's thoughts array field)
  .post(postNewThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  //GET a single thought by _id
  .get(getThoughtById)
  //PUT to  updeate a thought by its _id
  .put(putUpdateThoughtById)
  //DELETE to remove a thought by its _id
  .delete(deleteThoughtById);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  //POST to create a reaction stored in a single thought's reactions array field
  .post(postReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionsId')
  //DELETE to pull and remove a reaction by the reaction's reactionId value
  .delete(deleteReaction);

module.exports = router;
