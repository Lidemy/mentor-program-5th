const request = require('request')

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'vokqxqqgnyregkta6g8z26sigr545s'
    }
  },
  (err, res, body) => {
    const game = JSON.parse(body)
    for (let i = 0; i < game.top.length; i++) {
      console.log(`${game.top[i].viewers} ${game.top[i].game.name}`)
    }
  }
)
