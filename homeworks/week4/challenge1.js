const request = require('request')
const process = require('process')

const input = process.argv
request(
  {
    url: `https://api.twitch.tv/kraken/search/channels?query=${input[2]}&limit=100`,
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'vokqxqqgnyregkta6g8z26sigr545s'
    }
  },
  (err, res, body) => {
    const game = JSON.parse(body)
    for (let i = 0; i < 100; i++) {
      console.log(`${game.channels[i]._id} ${game.channels[i].name}`)
    }
  }
)
request(
  {
    url: `https://api.twitch.tv/kraken/search/channels?query=${input[2]}&limit=100&offset=100`,
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'vokqxqqgnyregkta6g8z26sigr545s'
    }
  },
  (err, res, body) => {
    const game = JSON.parse(body)
    for (let i = 0; i < 100; i++) {
      console.log(`${game.channels[i]._id} ${game.channels[i].name}`)
    }
  }
)
