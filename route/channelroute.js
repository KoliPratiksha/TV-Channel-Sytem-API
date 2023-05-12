const{getchannel,postchannel,putchannel,deletechannel} = require('../controller/channelController')

const route = require('express').Router()

route.get('/',getchannel)

route.post('/',postchannel)

route.put('/:id',putchannel)

route.delete('/:id',deletechannel)

module.exports = route