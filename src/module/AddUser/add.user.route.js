const express = require('express');
const { addUser, getAllAddedUser } = require('./add.user.controller');
const router = express.Router()

router.post('/addUser', addUser)
router.get('/getAllAddedUsers', getAllAddedUser)


module.exports = router