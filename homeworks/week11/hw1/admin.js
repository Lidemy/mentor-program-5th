document.querySelectorAll('.select').forEach((i) => {
  i.querySelector('.btn').addEventListener('click', () => {
    const select = i.querySelector('.role')
    const index = select.selectedIndex
    const changeRole = select.options[index].text
    const userId = i.querySelector('td').innerText
    const request = new XMLHttpRequest()
    request.onload = () => {
      console.log(request.responseText)
    }
    request.error = () => {
      console.log(request.responseText)
    }
    request.open('GET', `edit_role.php?role=${changeRole}&id=${userId}`)
    request.send()
  })
})
