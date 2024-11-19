const bcrypt = require("bcrypt");
const db = require("../models");

const notes = db.notes;

const viewNotesAll = async (req, res) => {
  try {
    const userNotes = await notes.findAll();
    res.json(userNotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

}

const viewNotesUser = async (req, res) => {
  try {
    const userNotes = await notes.findAll({ where: { userId: req.userId } });
    res.json(userNotes);
  } catch (error) {
    console.error(error);
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
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const newNote = async (req, res) => {
  try {
    const { title, body } = req.body;
    const userId = req.userId;
    data = {
      userId,
      title,
      body
    };

    const note = await notes.create(data);

    if (note) {
      return res.status(201).send(note);
    }
  } catch (error) {
    console.error(error);
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
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  viewNote,
  newNote,
  deleteNote,
  viewNotesAll,
  viewNotesUser
};
