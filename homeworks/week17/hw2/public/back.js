
const handleLiClick = (ele) => {
  ele.click((e) => {
    if ($(e.target).hasClass('btn-close')) {
      console.log($(e.currentTarget).attr('data_id'))
      if ($(e.currentTarget).attr('data_id')) {
        const id = Number($(e.currentTarget).attr('data_id'))
        $.ajax({
          url: 'http://localhost:5001/delete',
          method: 'POST',
          data: {
            id
          },
          success: (res) => {
            const alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                              ${res}
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
            $('.container').append(alert)
          },
          error: (err) => {
            const error = JSON.parse(err)
            console.log(error)
          }
        })
      }
      $(e.currentTarget).remove()
    } else if ($(e.target).hasClass('bi-pencil-square')) {
      const val = e.currentTarget.querySelectorAll('.words')
      if ($(e.currentTarget).find('.words')[0]) {
        for (let i = 0; i < val.length; i++) {
          if (val[i].innerHTML) {
            const input = val[i].innerHTML.split('</b>')[1]
            const edit = `<input value=${input}>`
            $(e.currentTarget.querySelector('div')).append(edit)
            $(e.currentTarget).find('.words').remove()
          }
        }
      } else {
        const val = $(e.currentTarget).find('input')
        const id = $(e.currentTarget).attr('data_id')
        const title = $(val[0]).val()
        const img = $(val[1]).val()
        const probabilities = $(val[2]).val()
        $.ajax({
          url: 'http://localhost:5001/edit',
          method: 'POST',
          data: {
            id,
            title,
            img,
            probabilities
          },
          success: (res) => {
            const alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                              ${res}
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
            $('.container').append(alert)
          },
          error: (err) => {
            console.log(err)
          }
        })
        for (let i = 0; i < val.length; i++) {
          const v = $(val[i]).val()
          let n = '獎名:'
          if (i === 1) {
            n = '圖片網址:'
          } else if (i === 2) {
            n = '權重:'
          }
          const p = `<div class='words w-90'><b>${n}</b> ${v}</div>`
          $(e.currentTarget.querySelector('div')).append(p)
          $(e.currentTarget).find('input').remove()
        }
      }
    }
  })
}

$(document).ready(() => {
  $.ajax({
    url: 'http://localhost:5001/back',
    success: (res) => {
      $('.list-group-item-action').each(function() {
        $(this).remove()
      })
      const resp = res.r
      resp.forEach(({ id, img, probabilities, title }) => {
        const li = `<li class="list-group-item list-group-item-action  
        d-flex justify-content-between align-items-center" data_id=${id}>
        <div>
          <div class='words w-90'><b>獎名:</b> ${title}</div>
          <div class='words w-90'><b>圖片網址:</b> ${img}</div>
          <div class='words w-90'><b>權重:</b> ${probabilities}</div>
        </div>
        <span class=btnwrap>
          <span><i class="bi bi-pencil-square"></i></span>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </span>
      </li>`
        $('.list-group').prepend(li)
        handleLiClick($('li:first'))
      })
    },
    error: (err) => {
      console.log(err)
    }
  })

  $('.input-group').keydown((e) => {
    const title = $($('input')[0]).val()
    const img = String($($('input')[1]).val())
    const probabilities = String($($('input')[2]).val())
    if (title !== '' && img !== '' && probabilities !== '' && e.keyCode === 13) {
      $.ajax({
        url: 'http://localhost:5001/add',
        method: 'POST',
        data: {
          title,
          img,
          probabilities
        },
        success: (res) => {
          const alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                             ${res.text}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`
          $('.container').append(alert)
          const li = `<li class="list-group-item list-group-item-action  
          d-flex justify-content-between align-items-center" data_id=${res.insertID}>
          <div>
            <div class='words w-90'><b>獎名:</b> ${title}</div>
            <div class='words w-90'><b>圖片網址:</b> ${img}</div>
            <div class='words w-90'><b>權重:</b> ${probabilities}</div>
          </div>
          <span class=btnwrap>
            <span><i class="bi bi-pencil-square"></i></span>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </span>
        </li>`
          $('.list-group').prepend(li)
          handleLiClick($('li:first'))
          $($('input')[0]).val('')
          $($('input')[1]).val('')
          $($('input')[2]).val('')
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  })
})
