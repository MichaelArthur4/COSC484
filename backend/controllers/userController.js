const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const JWT_SECRET = 'shhh'

//register new user
//api/users
const registerUser = asyncHandler(async(req,res) => {
    const {username,password} = req.body
    if(!username || !password){
        res.status(400)
        throw new Error('Include all fields')
    }
    console.log(req.body)

    const usernameCheck = await User.findOne({username})

    if(usernameCheck) {
        res.status(400)
        throw new Error('Username is taken')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password,salt)

    const user = await User.create({
        username,
        password: hashedPass
    })
    //???
    if(user){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            password: user.password,
            token: getToken(user._id)
        })
        console.log(user.username)
        }
        else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
)
//current user
const getMe = asyncHandler(async(req,res) => {
    /*const userInfo = {
        id: req.user._id,
        username: req.user.username,
        topsongs: req.user.topsongs,
        topartists: req.user.topartists,
        friends: req.user.friends,
        post: req.user.posts
    }*/
    res.status(200).json(req.user)
    
})
//Edit info of current profile
const editInfo = asyncHandler(async(req,res) => {
    console.log(req.body)
    const username = req.body.username
    User.findOneAndUpdate({username}, req.body, (err,res) => {
        if(err) throw err
        console.log(req.body)
    })
    const user =await User.findOne({username})

    res.status(200).json(user)
    
    
})
//get info of a specified user
const getUser = asyncHandler(async(req,res) => {
    const {username} = req.body
    console.log({username})
    const user = await User.findOne({username})
    console.log(req.body)
    res.status(200).json(user)
})

// fixed! delete specified user (will accept curUser.username)
const deleteUser = asyncHandler(async(req,res) => {
    const {username} = req.body
    User.findOneAndDelete({username}, (err, res) => {
        if(err) throw err
    })
    res.status(200).json({message: 'okay'})

})
//fixed :) takes username and "post: {song, review}"" as input
const addPost = asyncHandler(async(req,res) => {
    console.log(req.body)
    const {username, post} = req.body
    console.log(req.body)
    const user = await User.findOneAndUpdate({username}, {$push:{posts:post}})
    return res.status(200).json(user)
})

const getFollowers = asyncHandler(async(req,res) => {
    const {username} = req.body
    const user = await User.findOne({username})
    res.status(200).json(user.follower)
})

const addFollowing = asyncHandler(async(req, res) => {
    const {username, userToFollow} = req.body
    if(await User.findOne(username= {userToFollow})){
    const user = await User.findOneAndUpdate({username}, {$push: {following:userToFollow}})}
    else{
        res.status(404)
    }
})

const getPosts = asyncHandler(async(req,res) => {
    const {username} = req.body
    console.log({username})
    const user = await User.findOne({username})
    //console.log(posts)
    res.status(200).json(user.posts)
})

//api/users/userlist
//not needed for anything
const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find()
    res.status(200).json(users)
})

///api/users/login
const loginUser = asyncHandler(async(req,res) => {
    const {username, password} = req.body

    const user = await User.findOne({username})

    
    //if user exists
    if(user){
        const pass = await bcrypt.compare(password, user.password)
        if(pass){
            console.log('successful login!')
            res.status(200).json({
                message: 'true',
                token: getToken(user._id),
                username: user.username,
                bio: user.bio,
                topartists: user.topartists,
                topsongs: user.topsongs,
                posts: user.posts
            })

        }
        //invalid password
        else{
            res.status(401)
            throw new Error('Invalid password')
        }
        
    }
    else{
        throw new Error('Username not found ')
    }
})

const getToken = (id) =>{
    return jwt.sign({id},JWT_SECRET, {
        expiresIn: '150d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
    editInfo,
    getUsers,
    deleteUser,
    getPosts,
    getUser,
    addPost
}