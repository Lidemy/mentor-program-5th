const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// 指定預設的layout
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
const port = process.env.PORT || 3000
const fortune = require('./lib/fortune')

app.use(express.static(`${__dirname}public`))

// view預設回傳狀態碼200
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})

app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// 錯誤處理式必須放在所有path之後，且必須加入next
app.use((err, req, res, next) => {
  console.log(console.log(err.message))
  res.status(500)
  res.render('500')
})

app.listen(port, () => {
  console.log(`Express started on http://localhost:${port}`)
})
