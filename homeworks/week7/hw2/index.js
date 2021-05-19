document.querySelector('.Ques').addEventListener('click', (e) => {
  console.log(e.path)
  if (!e.target.classList.contains('Ques')) {
    if (e.path[0].classList.contains('ans')) {
      e.path[0].classList.toggle('show')
    } else if (e.path[0].classList.contains('Q__wrap')) {
      e.path[0].nextElementSibling.classList.toggle('show')
    } else {
      e.path[2].children[1].classList.toggle('show')
    }
  }
})
