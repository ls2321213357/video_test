const express = require('express')
const app = express()
//设置跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    next()
})
const one = require('./router/one')
const two = require('./router/two')
const three = require('./router/three')
const four = require('./router/four')
app.use('/one', one)
app.use('/two', two)
app.use('/three', three)
app.use('/four', four)
app.listen(8888,function (){
    console.log('服务器启动成功,端口是8888')
})