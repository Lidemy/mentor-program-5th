if (document.querySelector('.change_nickname')) {
  document.querySelector('.change_nickname').addEventListener('click', () => {
    document.querySelector('.handle_change_nickname').classList.toggle('hide')
  })
}

document.querySelectorAll('.comments').forEach((i) => {
  if (i.querySelector('.edit')) {
    i.querySelector('.edit').addEventListener('click', () => {
      i.querySelector('.edit_content').classList.toggle('hide')
      i.querySelector('.content').classList.toggle('hide')
    })
  }
})
