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
const upload = multer({ storage });

// =======================
// Routes
// =======================

// Get all products (public)
router.get('/', productController.getAllProducts);

// Get single product by ID (public)
router.get('/:id', productController.getProductById);

// Create product (admin only) with single image upload
router.post('/', auth, upload.single('imageUrl'), productController.createProduct);

// Update product (admin only) with optional single image upload
router.patch('/:id', auth, upload.single('imageUrl'), productController.updateProduct);

// Delete product (admin only)
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
