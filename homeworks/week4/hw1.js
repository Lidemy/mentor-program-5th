const request = require('request')

const arr = new Array(10)
for (let i = 1; i <= 10; i++) {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${i}`,
    (error, response, body) => {
      const b = JSON.parse(body)
      console.log(`${b.id} ${b.name}`)
      arr[b.id - 1] = [b.id, b.name]
    }
  )
}
