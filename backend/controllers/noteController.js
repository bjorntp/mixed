const bcrypt = require("bcrypt");
const db = require("../models");

const notes = db.notes;

const viewNotes = async (req, res) => {
  try {
    const userNotes = await notes.findAll({ where: { userId: req.userId } });
    res.json(userNotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const viewNote = async (req, res) => {
  try {
    const { noteId } = req.body;
    const note = await notes.findOne({
      where: {
        id: noteId,
        userId: req.userId
      }
    });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const newNote = async (req, res) => {
  try {
    const { title, body } = req.body;
    const userId = req.userId;
    console.log(req.body);
    console.log(req.userId);
    data = {
      userId,
      title,
      body
    };

    console.log(JSON.stringify(data))

    const note = await notes.create(data);

    if (note) {
      console.log("Note created");
      console.log("note: ", JSON.stringify(note, null, 2));

      return res.status(201).send(note);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.body;
    const deletedRow = await notes.destroy({
      where: {
        userId: req.userId,
        id: noteId
      }
    });
    if (deletedRow === 0) {
      return res.status(404).json({ message: 'Note not found' })
    }

    res.json({ message: 'Note deleted ' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  viewNote,
  viewNotes,
  newNote,
  deleteNote,
};
