const mongoose = require('mongoose')
//TODO: add 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Add a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'Add a password']
    },
    bio: {
        type: String,
        default: "No bio"
    },
    profileUrl: {
        type: String,
        default: "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    }, 
    topsongs: {
        type: Array,
        required: false,
        default: ["No song specified","No song specified","No song specified"]
    },
    topartists: {
        type: Array,
        required: false,
        default: ["No artist specified", "No artist specified", "No artist specified"]
    },
    following: {
        type: Array,
        required: false,
        default: []
    },
    follower: {
        type: Array,
        required: false,
        default: []
    },
    posts: {
        type: Array,
        required: false,
        default: []
    }

},
)

module.exports = mongoose.model('User', userSchema)