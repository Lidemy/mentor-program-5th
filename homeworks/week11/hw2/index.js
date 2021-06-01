document.querySelectorAll('.article').forEach((i) => {
  i.querySelector('.readmore').addEventListener('click', () => {
    i.querySelector('.article_content').classList.toggle('no_height_limit')
    if (i.querySelector('.readmore').innerText === 'READ MORE') {
      i.querySelector('.readmore').innerText = 'READ LESS'
    } else {
      i.querySelector('.readmore').innerText = 'READ MORE'
    }
  })
})
