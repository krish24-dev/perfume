const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const app = express();

// ==================
// Middleware
// ==================
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ==================
// Check Environment Variables
// ==================
if (!process.env.MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI is not set in .env file");
  process.exit(1);
}

// ==================
// MongoDB Connection
// ==================
mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'perfumedatabase', // Explicitly set DB name
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Stop server if DB connection fails
  });

// ==================
// Routes
// ==================
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// ==================
// Error Handler
// ==================
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ==================
// Start Server
// ==================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
