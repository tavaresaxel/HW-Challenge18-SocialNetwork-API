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

// /api/videos
//http://localhost:3001/api/videos
router.route('/').get(getThoughts).post(createThoughts);

// /api/videos/:videoId
router
  .route('/:thoughtsId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/videos/:videoId/responses
//http://localhost:3001/api/videos/
router.route('/:thoughtsId/reactions').post(addThoughtReaction);

// /api/videos/:videoId/responses/:responseId
router.route('/:videoId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
