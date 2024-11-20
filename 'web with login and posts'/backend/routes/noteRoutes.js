//importing modules
const express = require('express')
const noteController = require('../controllers/noteController')
const { newNote, viewNote, viewNotesUser, deleteNote, viewNotesAll } = noteController;
const userAuth = require('../middleware/userAuth')

const router = express.Router()

// create note
router.post('/new', userAuth.authentication, newNote)

// view existing note
router.get('/viewOne', userAuth.authentication, viewNote)

// view all existing note
router.get('/view', viewNotesAll)

// view all the user's notes 
router.get('/viewUser', userAuth.authentication, viewNotesUser)

// delete note
router.post('/delete', userAuth.authentication, deleteNote)


module.exports = router
