const{getserial,postserial,putserial,deleteserial} = require('../controller/serialController')

const route = require('express').Router()

route.get('/',getserial)

route.post('/',postserial)

route.put('/:id',putserial)

route.delete('/:id',deleteserial)


module.exports = route