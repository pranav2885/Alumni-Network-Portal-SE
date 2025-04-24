const Thread = require("../models/thread");

// Get all threads
exports.getThreads = async (req, res) => {
  try {
    const threads = await Thread.find()
      .populate("author", "name photoUrl")
      .populate("comments.author", "name photoUrl");
    res.status(200).json(threads);
  } catch (err) {
    res.status(500).json({ message: "Error fetching threads", error: err });
  }
};

// Create a new thread
exports.createThread = async (req, res) => {
  const { title, content, tags, author } = req.body;

  const newThread = new Thread({
    title,
    content,
    tags,
    author,
    comments: [],
    likes: [],
  });

  try {
    const savedThread = await newThread.save();
    const populatedThread = await savedThread.populate("author", "name photoUrl");
    res.status(201).json(populatedThread);
  } catch (err) {
    res.status(500).json({ message: "Error posting thread", error: err });
  }
};

// Add a comment to a thread
exports.addCommentToThread = async (req, res) => {
  const { id } = req.params;
  const { content, author } = req.body;

  try {
    const thread = await Thread.findById(id);
    if (!thread) return res.status(404).json({ message: "Thread not found" });

    thread.comments.push({ content, author });
    await thread.save();
    const updatedThread = await thread.populate("comments.author", "name photoUrl");
    res.status(200).json(updatedThread);
  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err });
  }
};

// Like a thread
exports.likeThread = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!userId) return res.status(400).json({ message: "Missing userId" });

  try {
    const thread = await Thread.findById(id);
    if (!thread) return res.status(404).json({ message: "Thread not found" });

    if (thread.likes.includes(userId)) {
      return res.status(400).json({ message: "Thread already liked by this user" });
    }

    thread.likes.push(userId);
    await thread.save();
    res.status(200).json(thread);
  } catch (err) {
    res.status(500).json({ message: "Error liking thread", error: err });
  }
};

// Delete a thread
exports.deleteThread = async (req, res) => {
  const { id } = req.params;
  try {
    const thread = await Thread.findByIdAndDelete(id);
    if (!thread) return res.status(404).json({ message: "Thread not found" });
    res.status(200).json({ message: "Thread deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting thread", error: err });
  }
};
