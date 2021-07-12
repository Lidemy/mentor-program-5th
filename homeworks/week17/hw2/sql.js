// const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'lisa',
//   password: 'lisa',
//   database: 'lisa'
// })

// connection.connect()
// let result = {}
// connection.query('SELECT * From prize', (err, rows, fields) => {
//   if (err) throw err
//   const getPrize = (prize) => {
//     let arr = []
//     rows.forEach((p) => {
//       const a = Array(p.probabilities).fill(p.id)
//       arr = arr.concat(a)
//     })
//     const prizeId = arr[Math.ceil(Math.random() * arr.length)] - 1
//     return prize[prizeId]
//   }
//   result = JSON.parse(JSON.stringify(getPrize(rows)))
// })

// connection.end()
