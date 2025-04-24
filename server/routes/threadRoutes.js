const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');

// Route for getting all threads
router.get('/', threadController.getThreads);

// Route for creating a new thread
router.post('/', threadController.createThread);

// Route for adding a comment to a thread
router.post('/:id/comments', threadController.addCommentToThread);

// Route for liking a thread
router.post('/:id/like', threadController.likeThread);

// Route for deleting a thread
router.delete('/:id', threadController.deleteThread);

module.exports = router;
