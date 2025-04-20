const express = require("express");
const router = express.Router();
const Thread = require("../models/Thread");

// Get all threads
router.get("/", async (req, res) => {
  try {
    const threads = await Thread.find()
      .populate("author", "name email")
      .populate("comments.author", "name")
      .sort({ createdAt: -1 });
    res.json(threads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new thread
router.post("/", async (req, res) => {
  const { title, content, author, tags } = req.body;
  try {
    const newThread = new Thread({
      title,
      content,
      author,
      tags,
    });
    const savedThread = await newThread.save();
    const populated = await savedThread.populate("author", "name email");
    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a comment to a thread
router.post("/:id/comments", async (req, res) => {
  const { content, author } = req.body;
  try {
    const thread = await Thread.findById(req.params.id);
    thread.comments.push({ content, author });
    thread.updatedAt = new Date();
    const updatedThread = await thread.save();
    const populated = await updatedThread.populate("comments.author", "name");
    res.status(201).json(populated.comments.at(-1));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
