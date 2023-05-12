const mongoose = require('mongoose')

const serialschema = mongoose.Schema({
    serialName:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    channel:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'channel1'
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('serial',serialschema)