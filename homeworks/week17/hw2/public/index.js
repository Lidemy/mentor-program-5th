document.querySelector('main').addEventListener('click', (e) => {
  if (e.target.classList.contains('lottery__btn')) {
    const req = new XMLHttpRequest()
    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        const response = JSON.parse(req.responseText).r
        console.log(response)
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
        main.style.backgroundImage = `url('${response.img}')`
        document.querySelector('main>div').innerText = response.title
      } else {
        alert('系統不穩定，請再試一次')
      }
    }
    req.onerror = () => {
      alert('系統不穩定，請再試一次')
    }
    req.open('GET', 'http://localhost:5001/prize', true)
    req.send()
  }
})
