const express = require("express");
const Notes = require("../models/Notes.js");
const Router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const { body, validationResult } = require("express-validator");

// Route 1: get all the notes get method "/api/notes/fetchallnotes".  login required
Router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval server error");
    }
});

// Route 2: Add a new Note using the Post method "/api/notes/addnote".  login required
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

// Route 3:Update Note using the put method "/api/notes/updatenote".  login required
Router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // create newNote
        const newNote = {};
        if (title) { newNote.title = title; }
        if (description) { newNote.description = description; }
        if (tag) { newNote.tag = tag; };

        // find the note to update 
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Allowed")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval server error");
    }
});

// Route 4:delete Note using the delete method "/api/notes/deletenote".  login required
Router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    try {
        // find the note to delete it 
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Allowed")
        }
        // allow deletion only if the user own the note 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note Deleted Succesfully", note: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval server error");
    }
});

module.exports = Router;
