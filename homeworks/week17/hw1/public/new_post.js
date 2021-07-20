$().ready(() => {
  $('.send').click(() => {
    const title = $('#title').val()
    const content = $('#content').val()
    $.ajax({
      url: 'http://localhost:3000/add',
      method: 'POST',
      data: {
        title,
        content
      },
      success: (res) => {
        console.log(res)
        window.location.href = 'http://localhost:3000/'
      },
      error: (err) => {
        console.log(err)
      }
    })
  })
  // logout
  $('.logout').click(() => {
    $.ajax({
      url: 'http://localhost:3000/logout',
      success: (res) => {
        console.log(res)
      },
      error: (err) => { console.log(err) }
    })
  })
})
