const request = new XMLHttpRequest()
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const games = JSON.parse(request.responseText).top
    for (let i = 0; i < 5; i++) {
      document.querySelector(`.gameName:nth-child(${i + 1})`).innerText = games[i].game.name
    }
  }
}
request.onerror = () => {
  console.log('err')
}
request.open('GET', 'https://api.twitch.tv/kraken/games/top', true)
request.setRequestHeader('Client-ID', 'vokqxqqgnyregkta6g8z26sigr545s')
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
request.send()

const renderStream = (game) => {
  const request2 = new XMLHttpRequest()
  request2.onload = () => {
    if (request2.status >= 200 && request2.status < 400) {
      for (let i = 0; i < 20; i++) {
        const info = JSON.parse(request2.responseText).streams[i]
        document.querySelectorAll('.vedio__streamer')[i].innerText = info.channel.name
        document.querySelectorAll('.vedio__title')[i].innerText = info.channel.description
        document.querySelectorAll('.vedio__pic')[i].src = info.channel.logo
        document.querySelectorAll('.preview')[i].src = info.preview.medium
        document.querySelectorAll('.vedio>a')[i].href = info.channel.url
      }
    }
  }
  request2.onerror = () => {
    console.log('err')
  }
  request2.open('GET', `https://api.twitch.tv/kraken/streams/?game=${game}&limit=20`)
  request2.setRequestHeader('Client-ID', 'vokqxqqgnyregkta6g8z26sigr545s')
  request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request2.send()
}

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
renderStream(document.querySelector('.gameName').innerText)

for (let i = 0; i < 5; i++) {
  document.querySelectorAll('.gameName')[i].addEventListener('click', (e) => {
    const clickGame = e.target.innerText
    renderStream(clickGame)
  })
}
// .channel.name vedio__streamer
// .channel.description vedio__title
// .channel.logo vedio__pic
// .preview.medium .preview.src
// .channel.url a.href
