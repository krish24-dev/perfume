const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const multer = require('multer');

// =======================
// Multer storage setup
// =======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder where images will be stored, ensure it exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});

// Make image upload optional
const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    // Accept image files only
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// =======================
// Routes
// =======================

// Get all products (public)
router.get('/', productController.getAllProducts);

// Get single product by ID (public)
router.get('/:id', productController.getProductById);

// Create product (admin only) - image upload is optional now
router.post('/', auth, upload.single('imageUrl'), productController.createProduct);

// Update product (admin only) - image upload is optional now
router.patch('/:id', auth, upload.single('imageUrl'), productController.updateProduct);

// Delete product (admin only)
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
