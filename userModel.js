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
        default: "https://play.google.com/store/apps/details?id=cute.love.dp&hl=en_IE&gl=US"
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