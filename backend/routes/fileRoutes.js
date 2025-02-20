const express = require('express');
const {
  getFiles,
  createFile,
  updateFile,
  deleteFile,
} = require('../controllers/fileController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/:projectId').get(protect, getFiles);
router.route('/').post(protect, createFile);
router.route('/:id').put(protect, updateFile).delete(protect, deleteFile);

module.exports = router;