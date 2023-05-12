const Channel = require('../modeles/channel')

// getchannel
exports.getchannel = async(req,res)=>{
    try {
        const data = await Channel.find()
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

//postchannel
exports.postchannel = async(req,res)=>{
    try {
        const data = await Channel.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// putchannel
exports.putchannel = async(req,res)=>{
    try {
        const data = await Channel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// deletechannel
exports.deletechannel = async(req,res)=>{
    try {
        const data = await Channel.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
