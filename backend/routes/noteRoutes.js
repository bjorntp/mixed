//importing modules
const express = require('express')
const noteController = require('../controllers/noteController')
const { newNote, viewNote, viewNotes, deleteNote } = noteController;
const userAuth = require('../middleware/userAuth')

const router = express.Router()

// create note
router.post('/new', userAuth.authentication, newNote)

// view existing note
router.get('/viewNote', userAuth.authentication, viewNote)

// view all existing note
router.get('/viewAll', userAuth.authentication, viewNotes)

// delete note
router.post('/delete', userAuth.authentication, deleteNote)


module.exports = router
