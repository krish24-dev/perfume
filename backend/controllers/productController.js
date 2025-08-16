const Product = require('../models/Product');

// =======================
// Get all products
// =======================
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (error) {
    console.error('Get products error:', error); // Full error logged
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// =======================
// Get single product
// =======================
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error('Get product error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// =======================
// Create product (debug version)
// =======================
exports.createProduct = async (req, res) => {
  try {
    console.log('Incoming request body:', req.body);
    console.log('Incoming file:', req.file);

    const { title, description, rating, price, discount, imageUrl: imageUrlFromBody } = req.body;

    const imageUrl = req.file ? req.file.path : imageUrlFromBody;

    if (!title || !description || !rating || !price || !discount || !imageUrl) {
      console.error('Missing required fields:', { title, description, rating, price, discount, imageUrl });
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newProduct = new Product({
      title,
      description,
      rating,
      price,
      discount,
      imageUrl
    });

    const savedProduct = await newProduct.save();
    console.log('Product saved successfully:', savedProduct);

    return res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Create product error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// =======================
// Update product
// =======================
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rating, price, discount, imageUrl: imageUrlFromBody } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    let product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const productFields = {
      title: title || product.title,
      description: description || product.description,
      rating: rating || product.rating,
      price: price || product.price,
      discount: discount || product.discount,
      imageUrl: req.file ? req.file.path : imageUrlFromBody || product.imageUrl
    };

    product = await Product.findByIdAndUpdate(id, { $set: productFields }, { new: true });
    return res.status(200).json(product);
  } catch (error) {
    console.error('Update product error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// =======================
// Delete product
// =======================
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Product removed successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
