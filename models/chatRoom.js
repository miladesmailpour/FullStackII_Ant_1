const mongoose = require('mongoose')

const chatRoomSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    chatToChannel: {
        type : String,
        required : true
    },
    chatDate: {
        type : Date,
        required : true,
        default : Date.now
    }
})

module.exports = mongoose.model('chatRoom', chatRoomSchema)