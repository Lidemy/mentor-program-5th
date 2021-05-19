const request = new XMLHttpRequest()
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const games = JSON.parse(request.responseText).top
    for (let i = 0; i < 5; i++) {
      document.querySelector(`.gameName:nth-child(${i + 1})`).innerText = games[i].game.name
    }
    renderStream(document.querySelector('.gameName').innerText, '', 0)
    document.querySelector('.stream').innerText = document.querySelector('.gameName').innerText
  }
}
request.onerror = () => {
  console.log('err')
}
request.open('GET', 'https://api.twitch.tv/kraken/games/top', true)
request.setRequestHeader('Client-ID', 'vokqxqqgnyregkta6g8z26sigr545s')
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
request.send()

const renderStream = (game, offset, plus) => {
  const request2 = new XMLHttpRequest()
  request2.onload = () => {
    if (request2.status >= 200 && request2.status < 400) {
      for (let i = 0; i < 20; i++) {
        const info = JSON.parse(request2.responseText).streams[i]
        document.querySelectorAll('.vedio__streamer')[i + plus].innerText = info.channel.name
        document.querySelectorAll('.vedio__title')[i + plus].innerText = info.channel.description
        document.querySelectorAll('.vedio__pic')[i + plus].src = info.channel.logo
        document.querySelectorAll('.preview')[i + plus].src = info.preview.medium
        document.querySelectorAll('.vedio>a')[i + plus].href = info.channel.url
      }
    }
  }
  request2.onerror = () => {
    console.log('err')
  }
  request2.open('GET', `https://api.twitch.tv/kraken/streams/?game=${game}&limit=20${offset}`)
  request2.setRequestHeader('Client-ID', 'vokqxqqgnyregkta6g8z26sigr545s')
  request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request2.send()
}
const mkblock = () => {
  for (let i = 0; i < 20; i++) {
    const a = document.createElement('a')
    a.innerHTML = `<div class=block>
                    <img class=preview src="" alt="1">
                    <div class=vedio__content>
                      <img class=vedio__pic alt='1'>
                      <div class=vedio__text>
                        <div class=vedio__title></div>
                        <div class=vedio__streamer></div>
                      </div>
                    </div>
                  </div>`
    document.querySelector('.vedio').appendChild(a)
  }
}
mkblock()
let plus = 20
for (let i = 0; i < 5; i++) {
  document.querySelectorAll('.gameName')[i].addEventListener('click', (e) => {
    const clickGame = e.target.innerText
    document.querySelector('.stream').innerText = clickGame
    renderStream(clickGame, '', 0)
    while (document.querySelectorAll('.vedio>a')[20]) {
      document.querySelector('.vedio').removeChild(document.querySelectorAll('.vedio>a')[20])
    }
    plus = 20
  })
}
document.querySelector('.more').addEventListener('click', () => {
  mkblock()
  console.log(document.querySelector('.stream').innerText)
  renderStream(document.querySelector('.stream').innerText, `&offset=${plus}`, plus)
  plus += 20
})
