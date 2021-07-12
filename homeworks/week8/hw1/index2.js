
const request = require('request')

const arr = [0, 0, 0, 0]
for (let i = 0; i < 1000; i++) {
  request(
    'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery',
    (error, res, body) => {
      if (res.statusCode === 200) {
        const { prize } = JSON.parse(body)
        if (prize === 'NONE') {
          arr[0]++
        } else if (prize === 'THIRD') {
          arr[1]++
        } else if (prize === 'SECOND') {
          arr[2]++
        } else if (prize === 'FIRST') {
          arr[3]++
        }
      }
    }
  )
}
setTimeout(() => { console.log(arr) }, 10000)
