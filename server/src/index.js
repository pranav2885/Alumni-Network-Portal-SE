const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Middleware
app.use(express.json());

// CORS Policy
const allowedOrigins = ["http://localhost:5173"]; 

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const OAuthRoute = require('../routes/OAuth')
app.use(OAuthRoute)

const threadRoutes = require("../routes/ThreadRoutes");
app.use("/api/threads", threadRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
