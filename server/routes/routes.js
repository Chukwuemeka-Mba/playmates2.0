// Imports
const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

// multer middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
let upload = multer({
  storage: storage,
}).single("image");

// Routes
router.get("/", API.fetchPlaymates);
router.post("/", upload, API.createPlaymate);
router.get("/:id", API.fetchPlaymateDetail);
router.patch("/:id", upload, API.updatePlaymate);
router.delete("/:id", API.deletePlaymate);

// Exports
module.exports = router;
