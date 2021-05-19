document.querySelector('main').addEventListener('click', (e) => {
  if (e.target.classList.contains('lottery__btn')) {
    const req = new XMLHttpRequest()
    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        const response = JSON.parse(req.responseText).prize
        const main = document.querySelector('main')
        let btn, words
        if (document.querySelector('.lottery')) {
          main.removeChild(document.querySelector('.lottery'))
          words = document.createElement('div')
          words.classList.add('prize__word')
          main.appendChild(words)
          btn = document.createElement('div')
          btn.classList.add('lottery__btn')
          btn.classList.add('prize__btn')
          btn.innerText = '我要抽獎'
          main.appendChild(btn)
        }
        if (response === 'NONE') {
          main.style.backgroundImage = 'none'
          main.style.backgroundColor = 'black'
          document.querySelector('main>div').innerText = '銘謝惠顧'
        } else if (response === 'THIRD') {
          main.style.backgroundImage = 'url(\'https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_960_720.jpg\')'
          document.querySelector('main>div').innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
        } else if (response === 'SECOND') {
          main.style.backgroundImage = 'url(\'https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_960_720.jpg\')'
          document.querySelector('main>div').innerText = '二獎！90 吋電視一台！'
        } else {
          main.style.backgroundImage = 'url(\'https://cdn.pixabay.com/photo/2019/07/04/06/35/flight-4315953_960_720.jpg\')'
          document.querySelector('main>div').innerText = '恭喜你中頭獎了！日本東京來回雙人遊！'
        }
      } else {
        alert('系統不穩定，請再試一次')
      }
    }
    req.onerror = () => {
      alert('系統不穩定，請再試一次')
    }
    req.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
    req.send()
  }
})
