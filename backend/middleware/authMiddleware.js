const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const JWT_SECRET = 'shhh'

const protect = asyncHandler(async (req,res,next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch(error){
            res.status(error)
            console.log(error)
            throw new Error('no auth')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('no auth')
    }
})

module.exports = {protect}