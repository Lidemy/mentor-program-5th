const request = require('request');
const args = process.argv;

const country = args[2];

if (!country) {
  return console.log('Please enter country name');
}

request(
  'https://restcountries.eu/rest/v2/name/{name}',
  function (error,response,body) {
    if (error) {
      return console.log('存取錯誤', error);
    }
    const data = JSON.parse(body);
    if (data.status === 404) {
      return console.log('cannot find country')
  }

  for (let i = 0; i < data.length; i++) {
    console.log('============')
    console.log('國家:' + data[i].name);
    console.log('首都:' + data[i].capital);
    console.log('貨幣:' + data[i].currencies[0].code);
    console.log('國碼:' + data[i].callingCodes[0]);
 }
})
