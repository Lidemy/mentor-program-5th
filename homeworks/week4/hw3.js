const request = require('request')
const process = require('process')

const input = process.argv
request(
  `https://restcountries.eu/rest/v2/name/${input[2]}`,
  (err, response, body) => {
    const country = JSON.parse(body)
    if (country.status === 404) {
      console.log('找不到國家資訊')
    }
    for (let i = 0; i < country.length; i++) {
      console.log('============')
      console.log(`國家：${country[i].name}`)
      console.log(`首都: ${country[i].capital}`)
      console.log(`貨幣：${country[i].currencies[0].code}`)
      console.log(`國碼：${country[i].callingCodes}`)
    }
  }
)
