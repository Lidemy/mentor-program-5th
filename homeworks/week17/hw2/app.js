const express = require('express')
const { randomPrize, allPrize, deletePrize, editPrize, addPrize } = require('./conn')
// const { prize, getPrize } = require('./prize')
// const { result } = require('./sql.js')

const port = 5001

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index.html')
})
app.get('/back', (req, res) => {
  allPrize((r) => {
    res.json({ r })
  })
})
app.get('/prize', (req, res) => {
  randomPrize((r) => {
    res.json({ r })
  })
})
app.post('/delete', (req, res) => {
  const { id } = req.body
  deletePrize(id, () => {
    res.type('text/plain').send('delete success')
  })
})
app.post('/edit', (req, res) => {
  const { id, title, img, probabilities } = req.body
  editPrize(id, title, img, probabilities, () => {
    res.type('text/plain').send('edit success')
  })
})
app.post('/add', (req, res) => {
  const { title, img, probabilities } = req.body
  addPrize(title, img, probabilities, (insertID) => {
    const text = 'add success'
    res.json({
      insertID,
      text
    })
  })
})

app.listen(port, () => {
  console.log(`Express started on http://localhost:${port}`)
})
