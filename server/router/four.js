const express = require('express')
const router = express.Router()
const data = require('../mock/four.json')
router.get('/data',(req,res)=>{
    res.send({
        status:200,
        msg:'succeed',
        data
    })
})
module.exports = router