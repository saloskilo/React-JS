const express = require("express");
const Notes = require("../models/Notes.js");
const Router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const { body, validationResult } = require("express-validator");

// Route 1: get all the notes get method "/api/auth/fetchallnotes".  login required
Router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Interval server error");
  }
});

// Route 2: Add a new Note using the Post method "/api/auth/addnote".  login required
Router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter Valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 Character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are error, send bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Interval server error");
    }
  }
);
module.exports = Router;
