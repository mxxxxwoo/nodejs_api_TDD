var express = require('express')
var app = express()
var morgan = require('morgan')

var user = require('./api/user')

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', user)

module.exports = app
// 태스트를 위해 app를 모듈로 exports 합니다. 