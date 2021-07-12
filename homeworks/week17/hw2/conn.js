
const randomPrize = (cb) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lisa',
    password: 'lisa',
    database: 'lisa'
  })

  connection.connect()
  connection.query('SELECT * From prize WHERE is_deleted IS NULL', (err, rows, fields) => {
    if (err) throw err
    const getPrize = (prize) => {
      let arr = []
      rows.forEach((p) => {
        const a = Array(p.probabilities).fill(p.id)
        arr = arr.concat(a)
      })
      const prizeId = arr[Math.floor(Math.random() * arr.length)] - 1
      return prize[prizeId]
    }
    const result = JSON.parse(JSON.stringify(getPrize(rows)))
    cb(result)
  })
  connection.end()
}

const allPrize = (cb) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lisa',
    password: 'lisa',
    database: 'lisa'
  })

  connection.connect()
  connection.query('SELECT * From prize WHERE is_deleted IS NULL', (err, rows, fields) => {
    if (err) throw err
    cb(rows)
  })
  connection.end()
}

const deletePrize = (id, cb) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lisa',
    password: 'lisa',
    database: 'lisa'
  })

  connection.connect()
  connection.query('UPDATE prize SET is_deleted=1 WHERE id=?', id, (err, rows, fields) => {
    if (err) throw err
    cb()
  })
  connection.end()
}
const editPrize = (id, title, img, probabilities, cb) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lisa',
    password: 'lisa',
    database: 'lisa'
  })

  connection.connect()
  connection.query('UPDATE prize SET title=?, img=? ,probabilities=? WHERE id=?', [title, img, probabilities, id],
    (err, rows, fields) => {
      if (err) throw err
      cb()
    })
  connection.end()
}
const addPrize = (title, img, probabilities, cb) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lisa',
    password: 'lisa',
    database: 'lisa'
  })

  connection.connect()
  connection.query('INSERT INTO prize (title, img, probabilities) VALUES (?, ?, ?)', [title, img, probabilities],
    (err, rows, fields) => {
      if (err) throw err
      cb(rows.insertId)
    })
  connection.end()
}

module.exports = {
  randomPrize,
  allPrize,
  deletePrize,
  editPrize,
  addPrize
}
