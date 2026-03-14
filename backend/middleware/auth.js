const jwt = require('jsonwebtoken');
const fs = require('fs');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }
  next();
};

const mimeSniffingMiddleware = async (req, res, next) => {
  if (!req.file || !req.file.path) {
    console.error('No file uploaded');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    console.log('Reading file from path:', req.file.path);
    const fileBuffer = fs.readFileSync(req.file.path);
    console.log('File buffer length:', fileBuffer.length);

    const { fileTypeFromBuffer } = await import('file-type');
    const detectedType = await fileTypeFromBuffer(fileBuffer);

    console.log('Detected MIME type:', detectedType);
    console.log('Uploaded file MIME type:', req.file.mimetype);

    if (!detectedType) {
      console.error('Could not determine file type');
      return res.status(400).json({ error: 'Could not determine file type' });
    }

    if (detectedType.mime !== req.file.mimetype) {
      console.error(`MIME type mismatch: Detected (${detectedType.mime}) vs Uploaded (${req.file.mimetype})`);
      return res.status(400).json({ error: 'Invalid file type detected' });
    }

    next();
  } catch (error) {
    console.error('Error during file type validation:', error);
    res.status(500).json({ error: 'Error during file type validation' });
  }
};

module.exports = { authMiddleware, adminMiddleware, mimeSniffingMiddleware };
