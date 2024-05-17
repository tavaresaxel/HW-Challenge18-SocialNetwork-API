const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
//http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:videoId
router
  .route('/:thoughtsId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/thoughts/:videoId/responses
//http://localhost:3001/api/thoughts/
router.route('/:thoughtsId/reactions').post(addThoughtReaction);

// /api/thoughts/:thoughtsId/responses/:responseId
router.route('/:thoughtsId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
