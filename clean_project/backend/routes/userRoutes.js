const express = require('express')
const { addComments, registerUser, loginUser, getMe, getUsers,editInfo, deleteUser, getPosts, getUser, addPost} = require('../controllers/userController')
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

//protect 
router.post('/me', getMe)

//edits info of a specified user
//input: {username, info (bio: , etc)}
//protect
router.put('/me',  editInfo)

//delete user
//input: {username}
router.delete('/me', protect, deleteUser)

//gets posts from a specified user
//input: {username}
router.get('/me/posts', getPosts)

//add comments to a user's post
//takes username, post_id, comment as input 
router.post('/user/posts/comments', addComments)
//adds post to list of posts from specified user
//input: {username, post}
//protect
router.post('/me/posts', addPost)

//returns a specified user
//input: {username}
router.get('/user', getUser)

//returns all users
//no input
router.get('/userlist', getUsers)


module.exports = router