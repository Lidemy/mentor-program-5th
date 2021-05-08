const request = require('request');
const process = require('process')

console.log(process.argv)
request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  function (error,response,body) {
    const json = JSON.parse(body)
  console.log(json);
  }
);
