const countTask = () => {
  $('.count').text(`${$('.list-group-item-info').length} items left`)
}
const handleLiClick = (ele) => {
  ele.click((e) => {
    if ($(e.target).hasClass('btn-close')) {
      if ($(e.currentTarget).attr('data_t_id')) {
        const taskId = $(e.currentTarget).attr('data_t_id')
        $.ajax({
          url: './handle_delete.php',
          method: 'POST',
          data: {
            taskId
          },
          success: (res) => {
            console.log(JSON.parse(res))
          },
          error: (err) => {
            const error = JSON.parse(err)
            console.log(error)
          }
        })
      }
      $(e.currentTarget).remove()
      countTask()
    } else if ($(e.target).hasClass('bi-pencil-square')) {
      const val = e.currentTarget.querySelector('span').innerText
      const input = `<input value=${val}>`
      console.log($(e))
      if ($(ele[0]).find('.words').length) {
        $(ele[0]).find('.words').replaceWith(input)
      } else {
        $(ele[0]).find('input').replaceWith(`<span class='words'>${$(ele[0]).find('input').val()}</span>`)
      }
    } else if ($(e.target).hasClass('list-group-item')) {
      $(e.target).toggleClass('list-group-item-info list-group-item-light')
      countTask()
    }
  })
}
let id = null
$(document).ready(() => {
  let str = window.location.search
  if (str) {
    str = str.split('?')
    str = str[1].split('=')
    if (str[0] === 'id') {
      // eslint-disable-next-line prefer-destructuring
      id = str[1]
      $.ajax({
        url: 'handle_log.php',
        data: {
          id
        },
        success: (res) => {
          $('.list-group-item-action').each(function() {
            $(this).remove()
          })
          const resp = JSON.parse(res)
          const { task } = resp
          for (let i = 0; i < task.length; i++) {
            let doneClass = ''
            if (task[i].done === 0) {
              doneClass = 'list-group-item-info'
            } else {
              doneClass = 'list-group-item-light'
            }
            const li = `<li class="list-group-item list-group-item-action ${doneClass} 
                            d-flex justify-content-between align-items-center" data_t_id=${task[i].t_id}>
                            <span class='words'>${task[i].taskname}</span>
                            <span class=btnwrap>
                              <span><i class="bi bi-pencil-square"></i></span>
                              <button type="button" class="btn-close" aria-label="Close"></button>
                            </span>
                          </li>`
            $('.list-group').prepend(li)
            handleLiClick($('li:first'))
            countTask()
          }
        },
        error: (err) => {
          const error = JSON.parse(err)
          console.log(error)
        }
      })
    }
  }
  $('input:first').keydown((e) => {
    const val = $('input').val()
    if (val !== '' && e.keyCode === 13) {
      $('input').val('')
      const li = `<li class="list-group-item list-group-item-action list-group-item-info 
                  d-flex justify-content-between align-items-center">
                  <span class='words'>${val}</span>
                  <span class=btnwrap>
                    <span><i class="bi bi-pencil-square"></i></span>
                    <button type="button" class="btn-close" aria-label="Close"></button>
                  </span>
                </li>`
      $('.list-group').prepend(li)
      handleLiClick($('li:first'))
    }
  })
  $('.list-group-item-action').each(function() {
    handleLiClick($(this))
  })

  countTask()
  $('.all').click(() => {
    $('.list-group-item').removeClass('d-none')
  })
  $('.undone').click(() => {
    $('.list-group-item-light').addClass('d-none')
    $('.list-group-item-info').removeClass('d-none')
  })
  $('.completed').click(() => {
    $('.list-group-item-light').removeClass('d-none')
    $('.list-group-item-info').addClass('d-none')
  })
  $('.clear').click(() => {
    $('.list-group-item-light').remove()
  })
  $('.save').click(() => {
    const taskname = []
    $('.words').each(function() {
      taskname.push($(this)[0].innerText)
    })
    const done = []
    const taskId = []
    $('.list-group-item-action').each(function() {
      if ($(this).hasClass('list-group-item-info')) {
        done.push(0)
      } else {
        done.push(1)
      }
      if ($(this).attr('data_t_id')) {
        taskId.push($(this).attr('data_t_id'))
      } else {
        taskId.push(null)
      }
    })

    $.ajax(
      {
        url: './handle_save.php',
        method: 'POST',
        data: {
          taskname,
          done,
          taskId,
          id
        },
        success: (res) => {
          const resp = JSON.parse(res)
          console.log(resp)
        },
        error: (err) => {
          const error = JSON.parse(err)
          console.log(error)
        }
      }
    )
  })
})
