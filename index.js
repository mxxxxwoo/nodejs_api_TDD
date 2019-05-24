var express = require('express')
var app = express()
var morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
var users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'}
]

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/users', function (req, res) {
    req.query.limit = req.query.limit || 10;

    // const limit = req.query.limit    문자열로 들어온다
    const limit = parseInt(req.query.limit, 10)
    
    if (Number.isNaN(limit)) {
      return res.status(400).end()
    } 
    res.json(users.slice(0, limit))
})

app.get('/users/:id', function(req, res) {
    const id = parseInt(req.params.id, 10)
    if(Number.isNaN(id)) return res.status(400).end()

    const user = users.filter((user) => user.id === id)[0]
    if(!user) return res.status(404).end()

    res.json(user)
})

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  if(Number.isNaN(id)) return res.status(400).end()

  users = users.filter(user => user.id !== id)
  res.status(204).end()
})


app.post('/users', (req, res) => {
  const name = req.body.name
  const id = Date.now()
  const user = {id, name}
  users.push(user)
  res.status(201).json(user)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

module.exports = app
// 태스트를 위해 app를 모듈로 exports 합니다. 