const express = require('express')
const session = require('express-session')
const { controlArticle, controlLogin } = require('./db.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 3
  }
}))

app.get('/', (req, res) => {
  res.render('index.html')
})
app.get('/checkIfLogin', (req, res) => {
  if (req.session.username) {
    res.json({ username: req.session.username })
  }
})
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.type('text/plain').send('logout success!')
  })
})
app.get('/getAll', (req, res) => {
  controlArticle.getAll(req.body.limit, req.body.offset, (r) => {
    res.json(r)
  })
})
app.post('/edit', (req, res) => {
  if (req.session.username) {
    controlArticle.edit(
      req.body.id, req.body.title, req.body.content, () => {
        res.type('text/plain').send('edit success!')
      })
  }
})
app.post('/delete', (req, res) => {
  if (req.session.username) {
    controlArticle.delete(req.body.id, () => {
      res.type('text/plain').send('delete success!')
    })
  }
})
app.post('/add', (req, res) => {
  if (req.session.username) {
    controlArticle.add(req.body.title, req.body.content, () => {
      res.type('text/plain').send('post success!')
    })
  }
})
app.post('/login', (req, res) => {
  controlLogin.login(req.body.username, req.body.password, (r) => {
    if (r[0]) {
      req.session.username = req.body.username
      res.type('text/plain').send('login success!')
    } else {
      res.type('text/plain').send('login false!')
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
