const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://mike484:password484@484cluster.iysjgtj.mongodb.net/tutunesdb?retryWrites=true&w=majority'
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB