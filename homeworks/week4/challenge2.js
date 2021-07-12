const https = require('https')
const process = require('process')

const input = process.argv
if (input[2] === 'list') {
  for (let i = 1; i <= 20; i++) {
    https.request({
      hostname: 'https://lidemy-book-store.herokuapp.com/books',
      port: 443,
      path: '/',
      method: 'GET'
    },
    (res) => {
      console.log(res)
      res.on('data', (d) => {
        process.stdout.write(d)
      })
    }
    )
  }
} else if (input[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${input[3]}`,
    (error, response, body) => {
      const b = JSON.parse(body)
      console.log(`${b.id} ${b.name}`)
    }
  )
} else if (input[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: input[3]
      }
    },
    (error, response, body) => {
      console.log(body)
    }
  )
} else if (input[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${input[3]}`,
    (error, response, body) => {
      console.log(response.statusCode)
    }
  )
} else if (input[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${input[3]}`,
      form: {
        name: input[4]
      }
    },
    (error, response, body) => {
      console.log(body)
    }
  )
}
