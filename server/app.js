const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const threadRoutes = require("./routes/threadRoutes");
app.use("/api/threads", threadRoutes);

module.exports = app;
