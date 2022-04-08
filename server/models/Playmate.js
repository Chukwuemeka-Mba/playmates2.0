const mongoose = require("mongoose");

const playmateSchema = mongoose.Schema({
  name: String,
  age: Number,
  details: String,
  image: String,
  count: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Playmate", playmateSchema);
