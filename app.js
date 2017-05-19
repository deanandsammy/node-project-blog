/*
 * Created by Huge on 2016年5月17日21:46:58
 * */

'use strict'

// 加载模块
let express = require('express')
let swig = require('swig')

// 创建 app 应用
let app = express()

// 静态文件托管
app.use('/public', express.static(__dirname + '/public'))

// 模板配置
app.engine('html', swig.renderFile)
// 设置模板文件存放目录
app.set('views', './views')
app.set('view engine', 'html')
swig.setDefaults({cache: false})

//分模块开发
app.use('/admin', require('./routers/admin'))
app.use('/api', require('./routers/api'))
app.use('/', require('./routers/main'))


// 监听 http 请求
app.listen(8080)