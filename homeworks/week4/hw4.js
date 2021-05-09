const request = require('request');

const apiurl = 'https://api.twitch.tv/kraken/games/top';
const clientID = Luyeom;

request({
  method: 'GET',
  url: apiurl,
  headers: {
    'Client-ID': clientID,
    'Accept': 'application/vnd.twitchtv.v5+json',
  }
}, function (error,response,body) {
    console.log(body)
})
