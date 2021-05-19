document.querySelector('.next-icon').addEventListener('click', (e) => {
  if (document.querySelector('.carousel-item.active~.carousel-item')) {
    document.querySelector('.carousel-item.active~.carousel-item').classList.add('active')
    document.querySelector('li.active~li').classList.add('active')
    document.querySelector('.carousel-item.active').classList.remove('active')
    document.querySelector('li.active').classList.remove('active')
  } else {
    document.querySelector('.first').parentNode.classList.add('active')
    document.querySelector('li:nth-child(1)').classList.add('active')
    document.querySelector('.third').parentNode.classList.remove('active')
    document.querySelector('li:nth-child(3)').classList.remove('active')
  }
})
document.querySelector('.prev-icon').addEventListener('click', (e) => {
  if (document.querySelector('.carousel-item.active').previousElementSibling) {
    document.querySelector('.carousel-item.active').previousElementSibling.classList.add('active')
    document.querySelector('li.active').previousElementSibling.classList.add('active')
    document.querySelector('.carousel-item.active').nextElementSibling.classList.remove('active')
    document.querySelector('li.active').nextElementSibling.classList.remove('active')
  } else {
    document.querySelector('.first').parentNode.classList.remove('active')
    document.querySelector('li:nth-child(1)').classList.remove('active')
    document.querySelector('.third').parentNode.classList.add('active')
    document.querySelector('li:nth-child(3)').classList.add('active')
  }
})
document.querySelector('.carousel-indicators').addEventListener('click', (e) => {
  console.log(e.target.getAttribute('data-slide-to'))
  if (e.target.getAttribute('data-slide-to')) {
    document.querySelector('li.active').classList.remove('active')
    document.querySelector('.carousel-item.active').classList.remove('active')
    const page = e.target.getAttribute('data-slide-to')
    if (page === '0') {
      document.querySelector('.first').parentNode.classList.add('active')
    } else if (page === '1') {
      document.querySelector('.second').parentNode.classList.add('active')
    } else {
      document.querySelector('.third').parentNode.classList.add('active')
    }
    document.querySelector(`li:nth-child(${Number(page) + 1})`).classList.add('active')
  }
})
