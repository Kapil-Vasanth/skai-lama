const Files = require('../models/fileModel');

// @desc    Get all files for a project
// @route   GET /api/files/:projectId
// @access  Private
const getFiles = async (req, res) => {
  try {
    const files = await Files.find({ projectId: req.params.projectId });
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new file
// @route   POST /api/files
// @access  Private
const createFile = async (req, res) => {
  const { name, projectId, content } = req.body;

  try {
    const file = new Files({
      name,
      projectId,
      content,
    });

    const createdFile = await file.save();
    res.status(201).json(createdFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a file
// @route   PUT /api/files/:id
// @access  Private
const updateFile = async (req, res) => {
  const { name, content } = req.body;
  
  try {
    const file = await Files.findById(req.params.id);

    if (file) {
      file.name = name || file.name;
      file.content = content || file.content;

      const updatedFile = await file.save();
      res.json(updatedFile);
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a file
// @route   DELETE /api/files/:id
// @access  Private
const deleteFile = async (req, res) => {
  try {
    const file = await Files.findById(req.params.id);

    if (file) {
      await Files.findByIdAndDelete(req.params.id);
      res.json({ message: 'File removed' });
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getFiles,
  createFile,
  updateFile,
  deleteFile,
};