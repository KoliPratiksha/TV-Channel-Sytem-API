
const mongoose = require('mongoose')

const channelschema = mongoose.Schema({
    channelname:{
        type:String,
        required:true
    },
    channelType:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('channel1',channelschema)