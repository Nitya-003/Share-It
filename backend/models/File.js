const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  originalName: { type: String, required: true },
  fileSize: { type: Number, required: true },
  fileType: { type: String, required: true },
  filePath: { type: String, required: true },
  downloadLink: { type: String, required: true, unique: true },
  password: { type: String, default: null },
  expiresAt: { type: Date, required: true },
  downloadCount: { type: Number, default: 0 },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', fileSchema);
