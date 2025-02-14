const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema'); // Import schema correctly
const resolvers = require('./resolvers'); // Import resolvers correctly
require('dotenv').config(); // Load environment variables

// MongoDB Connection URL
const mongodb_atlas_url = process.env.MONGODB_URL;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_atlas_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all requests

// Start Apollo Server and apply middleware
const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start(); // Ensure Apollo Server starts before applying middleware
  server.applyMiddleware({ app });

  // Start Express server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

// Start the database and Apollo Server
connectDB().then(startServer);
