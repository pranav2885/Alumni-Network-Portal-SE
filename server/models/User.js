const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  SNo: { type: Number },
  id: { type: String, required: true, unique: true }, // SRM ID
  name: { type: String, required: true },
  email: { type: String, required: true }, // Institutional Email
  personelEmail: { type: String },
  gender: { type: String },
  dob: { type: String },
  mobile: { type: String },
  Program: { type: String },
  Branch: { type: String },
  School: { type: String },
  Section: { type: String },
  PassedOut: { type: Boolean },
  CGPA: { type: Number },
  job: { type: String },
  position: { type: String },
  Salary: { type: Number }, // in LPA
  MastersCollege: { type: String },
  MastersProgram: { type: String },
  PresentStatus: { type: String },
  PresentLocation: { type: String },
  PathChosen: { type: String },
  LinkedIn: { type: String },
  AlumniPortalRegistered: { type: String },
  imageURL: { type: String }, // Can be initially set to photoUrl
  role: { type: String, enum: ["User", "Admin"], default: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
