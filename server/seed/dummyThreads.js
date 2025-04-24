const mongoose = require("mongoose");
const Thread = require("../models/Thread");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Thread.deleteMany();

  await Thread.insertMany([
    {
      title: "Welcome to the Alumni Network!",
      content: "Let's connect and share our stories here.",
      tags: ["welcome", "introduction"],
      author: "6617e453b6450c8f491f4290",
    },
    {
      title: "Tech Meetup 2024",
      content: "We're planning a tech meetup for alumni in June!",
      tags: ["event", "meetup", "tech"],
      author: "6617e453b6450c8f491f4290",
    },
  ]);

  console.log("Dummy threads inserted!");
  mongoose.disconnect();
});
