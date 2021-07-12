const request = require('request')

request(
  'http://r30challenge.herokuapp.com/news_api.php?id=888888',
  (error, response, body) => {
    console.log(body)
  }
)
