//importing modules
const express = require('express')
const noteController = require('../controllers/noteController')
const { newNote, viewNote, viewNotesUser, deleteNote, viewNotesAll, editNote } = noteController;
const userAuth = require('../middleware/userAuth')

const router = express.Router()

// create note
router.post('/new', userAuth.authentication, newNote)

// view existing note
router.get('/view_one', userAuth.authentication, viewNote)

// view all existing note
router.get('/view', viewNotesAll)

// view all the user's notes 
router.get('/view_posts', userAuth.authentication, viewNotesUser)

// delete note
router.post('/delete', userAuth.authentication, deleteNote)

// edit a created note
router.post('/edit', userAuth.authentication, editNote)
module.exports = router
