const loadComment = (limit, offset) => {
  $.ajax({
    url: `./show_post.php?limit=${limit}&offset=${offset}`,
    success: (res) => {
      const result = JSON.parse(res).comments
      if (JSON.parse(res).message === 'no more comments') {
        $('.btn-secondary').hide()
      } else {
        for (let i = 0; i < result.length; i++) {
          const comment = `<div class="alert alert-primary mt-3 row" role="alert">
            <h5 class="">${result[i].username}</h5>
            <span class="col-9">${result[i].content}</span>
            <span class="col">${result[i].created_at}</span>
          </div>`
          $('.comments').append(comment)
        }
      }
    },
    error: (err) => {
      console.log(err.responseText)
    }
  })
}

$(document).ready(() => {
  $('.btn-primary').click(() => {
    let username = null
    let content = null
    username = $('#exampleFormControlInput1').val()
    content = $('#exampleFormControlTextarea1').val()
    console.log(username)
    $.ajax({
      method: 'POST',
      url: './add_post.php',
      data: {
        username,
        content
      },
      success: (res) => {
        console.log(res)
        location.reload()
      },
      error: (err) => {
        console.log(err.responseText)
      }
    })
  })

  const limit = 5
  let offset = 0
  loadComment(limit, offset)
  $('.btn-secondary').click(() => {
    offset += 5
    loadComment(limit, offset)
  })
})
