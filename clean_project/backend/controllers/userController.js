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

    if(user){
        res.status(201).json({
            id: user._id,
            username: user.username,
            token: getToken(user._id)
        })
        }
        else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
)







//current user
const getMe = asyncHandler(async(req,res) => {
    console.log(req.body)
    const id = req.body.id
    console.log(id)
    const user = await User.findById(id)
    console.log(user)
    res.status(200).json(user)
    
})


//chynna messing around
const userByID = (req, res, next, id) => {
    User.findById(id)
      .populate('following', '_id name')
      .populate('followers', '_id name')
      .exec((err, user) => {
      if (err || !user) return res.status('400').json({
        error: "User not found"
      })
      req.profile = user
      next()
    })
  }



//Edit info of current profile
const editInfo = asyncHandler(async(req,res) => {
    const username = req.body.username
    User.findOneAndUpdate({username}, req.body, (err,res) => {
        if(err) throw err
    })
    const user =await User.findOne({username})
    res.status(200).json(user)
    
    
})

const getFollowingArray = asyncHandler(async(req,res) => {
    const {id} = req.body
    const user = await User.findById(id)
    const followedArray = []

    for(var i = 0; i < user.following.length; i++){
        var followedUser = await User.findById(user.following[i])
        if(followedUser){
            followedArray.push(followedUser)
        }
    }
    res.status(200).json(followedArray)
})

const getFollowerArray = asyncHandler(async(req,res) => {
    const {id} = req.body
    const user = await User.findById(id)
    const followedArray = []

    for(var i = 0; i < user.follower.length; i++){
        var followerUser = await User.findById(user.follower[i])
        if(followerUser){
            followedArray.push(followerUser)
            
        }
    }
    res.status(200).json(JSON.stringify(followedArray))
})






//get info of a specified user
const getUser = asyncHandler(async(req,res) => {
    const {id} = req.body
    const user = await User.findOne({id})
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
    const user = await User.findOneAndUpdate({username}, {$push:{posts:post}})
    return res.status(200).json(user)
})

const addComments = asyncHandler(async(req,res)=>{
    const {username, post_id, comment} = req.body
    console.log(req.body)
    //const user = await User.findOneAndUpdate({username.post.post_id}, )
    //return res.status(200).json(user.posts)
}) 


//get user's following list
//input username
const getFollowing =asyncHandler(async(req,res) => {
    const {username} = req.body
    const user = await User.findOne({username})
    const followedArray = []
    for(var i = 0; i < user.following.length; i++){
        var followedUser = await User.findById(user.following[i])
        if(followedUser){
            followedArray.push(followedUser)
        }
    }
    res.status(200).json(user.following)
})

//input get users followers
const getFollowers = asyncHandler(async(req,res) => {
    const {username} = req.body
    const user = await User.findOne({username})
    res.status(200).json(user.follower)
})





//add a follower to user and following to target user 
//Mike fix of josiah 'code'
const addFollow = async (req,res)=> {
    const {id, idMe} = req.body
        try{
            const user = await User.findById(id);
            const currentUser = await User.findById(idMe);
            if(!user.follower.includes(idMe)){
                await user.updateOne({$push:{follower:idMe}});
                await currentUser.updateOne({$push:{following:id}});
                res.status(200).json("success");

            }
        }catch(err){
            res.status(500).json({'message': 'error in addFollow'})
        }
}


//get a list of user posts
//inputs username
const getPosts = asyncHandler(async(req,res) => {
    const {username} = req.body
    console.log({username})
    const user = await User.findOne({username})

    res.status(200).json(user.posts)
})






//api/users/userlist
//not needed for anything
//Unless I want to populate a page with them?
const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find()
    if(users){
        console.log(users)
    res.status(201).json(users)}

    else{
        res.status(404).json({'message': 'cannot find users'})
    }
})









///api/users/login
const loginUser = asyncHandler(async(req,res) => {
    const {username, password} = req.body
    console.log(req.body)
    const user = await User.findOne({username})

    
    //if user exists
    if(user){
        const pass = await bcrypt.compare(password, user.password)
        if(pass){
            console.log('successful login!')
            res.status(200).json({
                id: user._id,
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
            res.status(401).json({
                id: null,
                token: null,
                username: null,
                bio: null,
                topartists: null,
                topsongs: null,
                posts: null
            })
            throw new Error('Invalid password')
        }
        
    }
    else{
        res.status(401).json({
            id: null,
            token: null,
            username: null,
            bio: null,
            topartists: null,
            topsongs: null,
            posts: null
        })
        throw new Error('Username not found ')
    }
})

const getToken = (id) =>{
    return jwt.sign({id},JWT_SECRET, {
        expiresIn: '1d'
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
    addPost, 
    addComments,
    addFollow, getFollowingArray, getFollowingArray, getFollowerArray
}