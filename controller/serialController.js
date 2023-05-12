const Serial = require('../modeles/Serial')

// getSerial
exports.getserial = async(req,res)=>{
    try {
        const data = await Serial.find().populate('channel')
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//postSerial
exports.postserial= async(req,res)=>{
    try {
        const data = await Serial.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// putSerial
exports.putserial = async(req,res)=>{
    try {
        const data = await Serial.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// deleteSerial
exports.deleteserial = async(req,res)=>{
    try {
        const data = await Serial.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
