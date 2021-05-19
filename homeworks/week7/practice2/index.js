let count = 2
document.querySelector('.new').addEventListener('click', () => {
  const div = document.createElement('div')
  div.innerHTML = `<div class='block' style="display: inline;" id='${count}'>
                    姓名:<input type="text">
                    電話:<input type="text">
                    <button class='delete'>刪除</button><br>
                  </div>`
  document.querySelector('.all').appendChild(div)
  count++
})
document.querySelector('.all').addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    e.path[2].removeChild(e.path[1])
  }
})
