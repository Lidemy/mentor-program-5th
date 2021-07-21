const express = require('express')
const { prizeMethod } = require('./conn')

const app = express()
const port = 5001

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/back', (req, res) => {
  res.render('back')
})
app.get('/getPrize', (req, res) => {
  prizeMethod.ramdomPrize((r) => {
    res.json({ r })
  })
})
app.get('/getAll', (req, res) => {
  prizeMethod.getAll((r) => {
    res.json(r)
  })
})

app.post('/newPrize', (req, res) => {
  prizeMethod.newPrize(req.body, (r) => {
    res.json(r)
  })
})
app.post('/deletePrize', (req, res) => {
  prizeMethod.deletePrize(req.body, () => {
    res.type('text/plain').send('刪除成功')
  })
})
app.post('/editPrize', (req, res) => {
  prizeMethod.editPrize(req.body, () => {
    res.type('text/plain').send('編輯成功')
  })
})
app.listen(port, () => {
  console.log('start')
})
