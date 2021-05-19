document.querySelector('.type>input').addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && e.target.value) {
    const div = document.createElement('div')
    div.addEventListener('click', () => {
      console.log('clicked')
    })
    document.querySelector('.tasksList').appendChild(div)
    div.outerHTML = `<div class="task">
                      <label class=checkbox__wrap>
                        <input type="checkbox">
                        <i class="far fa-square"></i>
                      </label>
                      <div class=task__title>${e.target.value}</div>
                      <div class=icon><i class="fas fa-times"></i></div>
                    </div>`
    e.target.value = ''
    document.querySelector('.task:last-child>label>i').addEventListener('click', (e) => {
      e.path[2].children[1].classList.toggle('line-through')
      e.target.classList.toggle('fa-square')
      e.target.classList.toggle('fa-check-square')
    })
    document.querySelector('.task:last-child>.icon').addEventListener('click', (e) => {
      e.path[3].removeChild(e.path[2])
    })
  }
})
