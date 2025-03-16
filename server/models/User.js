const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  photoUrl: { type: String }, // Optional: Profile picture
  role: { type: String, enum: ["User", "Admin"], default: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
