const Playmate = require("../models/Playmate");
const fs = require("fs");
module.exports = class API {
  // fetch all posts
  static async fetchPlaymates(req, res, next) {
    try {
      const playmates = await Playmate.find();
      res.status(200).json(playmates);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async fetchPlaymateDetail(req, res, next) {
    const id = req.params.id;
    try {
      const playmate = await Playmate.findById(id);
      res.status(200).json(playmate);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async createPlaymate(req, res) {
    const playmate = req.body;
    try {
      await Playmate.create(playmate);
      res.status(201).json({ message: "Playmate created successfully!" });
      res.end();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updatePlaymate(req, res, next) {
    const id = req.params.id;
    let new_image = "";
    if (req.file) {
      try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }
    const newPlaymate = req.body;
    newPlaymate.image = new_image;

    try {
      await Playmate.findByIdAndUpdate(id, newPlaymate);
      res.status(200).json({ message: " Post updated successfully! " });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async deletePlaymate(req, res, next) {
    const id = req.params.id;
    try {
      await Playmate.findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted with tears! " });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
