require('dotenv/config')
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const Channel_route = require('./route/channelroute')
const Serial_route = require('./route/serialroute')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// default main
app.get('/',(req,res)=>{
    res.send("This is home")
})

app.use('/api/channel',Channel_route )
app.use('/api/serial',Serial_route )

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})

async function main(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()