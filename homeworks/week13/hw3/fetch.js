const getTOP5 = () => fetch('https://api.twitch.tv/kraken/games/top', {
  headers: new Headers({
    'Client-ID': 'vokqxqqgnyregkta6g8z26sigr545s',
    Accept: 'application/vnd.twitchtv.v5+json'
  })
})

const renderStream = (game, offset, plus) => {
  fetch(`https://api.twitch.tv/kraken/streams/?game=${game}&limit=20${offset}`, {
    headers: new Headers({
      'Client-ID': 'vokqxqqgnyregkta6g8z26sigr545s',
      Accept: 'application/vnd.twitchtv.v5+json'
    })
  }).then((r) => r.json()
  ).then((res) => {
    for (let i = 0; i < 20; i++) {
      const info = res.streams[i]
      $('.vedio__streamer')[i + plus].innerText = info.channel.name
      $('.vedio__title')[i + plus].innerText = info.channel.description
      $('.vedio__pic')[i + plus].src = info.channel.logo
      $('.preview')[i + plus].src = info.preview.medium
      $('.vedio>a')[i + plus].href = info.channel.url
    }
  }).catch((err) => {
    console.log(err)
  })
}
const mkblock = () => {
  for (let i = 0; i < 20; i++) {
    const a = $(`<a>
                  <div class=block>
                    <img class=preview src="" alt="1">
                    <div class=vedio__content>
                      <img class=vedio__pic alt='1'>
                      <div class=vedio__text>
                        <div class=vedio__title></div>
                        <div class=vedio__streamer></div>
                      </div>
                    </div>
                  </div>
                </a>`)
    $('.vedio').append(a)
  }
}
let plus = 20
$(document).ready(async() => {
  mkblock()
  try {
    const res = await getTOP5()
    const data = await res.json((r) => r)
    $('.gameName').each(function(i) {
      $(this).html(data.top[i].game.name)
    })
    $('.stream').html(document.querySelector('.gameName').innerHTML)
    renderStream(document.querySelector('.gameName').innerHTML, '', 0)
  } catch (err) {
    console.log(err)
  }
  $('.gameName').each(function() {
    $(this).click((i) => {
      const clickGame = $(this).html()
      $('.stream').html(clickGame)
      renderStream(clickGame, '', 0)
      while ($('.vedio>a')[20]) {
        $('.vedio>a')[20].remove()
      }
      plus = 20
    })
  })
  $('.more').click(async() => {
    mkblock()
    await renderStream(document.querySelector('.stream').innerText, `&offset=${plus}`, plus)
    plus += 20
  })
})
