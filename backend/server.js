require("dotenv").config(); // Load environment variables
const connectDB = require("./model/db.js"); // Changed from destructuring
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Removed duplicate

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server startup error:", err.message);
    process.exit(1);
  }
};

startServer();

// Routes
const productRoutes = require("./api/productRoutes");
const cartRoutes = require("./api/cartRoutes");

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

module.exports = app;