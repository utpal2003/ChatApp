const Counter = require("../models/Counter");

const generateUsername = async (name) => {

  const cleanName = name
    .toLowerCase()
    .replace(/\s+/g, "");

  const counter = await Counter.findOneAndUpdate(
    { name: "username" },
    { $inc: { seq: 1 } },
    {
      new: true,
      upsert: true,
    }
  );

  return `${cleanName}_chat${counter.seq}`;
};

module.exports = generateUsername;