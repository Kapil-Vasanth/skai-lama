const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastEdited: {
      type: String,
      default: 'a week ago',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual field to count the number of associated files
projectSchema.virtual('files', {
  ref: 'Files',
  localField: '_id',
  foreignField: 'projectId',
  count: true,
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;