const express = require('express')
const {registerUser, loginUser, getMe, getUsers,editInfo, deleteUser, getPosts, getUser, addPost} = require('../controllers/userController')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

//if user doesn't exist
//adds user to database
//input: {username, password}
router.post('/', registerUser)

//router.use(protect)
//if user exists
//sends a user instance as response
//input {username, passeword}
router.post('/login', loginUser)

//
router.get('/me', protect, getMe)

//gets posts from a specified user
//input: {username}
router.get('/userposts', getPosts)

//adds post to list of posts from specified user
//input: {username, post}
router.post('/userposts', addPost)

//returns a specified user
//input: {username}
router.get('/user', getUser)

//returns all users
//no input
router.get('/userlist', getUsers)

//edits info of a specified user
//input: {username, info (bio: , etc)}
router.put('/user', editInfo)

//delete user
//input: {username}
router.delete('/user', deleteUser)

module.exports = router