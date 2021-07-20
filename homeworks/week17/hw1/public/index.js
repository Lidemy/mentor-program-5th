
const newPost = (p) => {
  const newPost = `<div class="post" data-id=${p.article_id}>
                    <div class="post__header">
                      <h5 class="modal-title">${p.title}</h5>
                      <p>${p.created_at}</p>
                    </div>
                    <div class="post__body">
                        <p>${p.content}</p>
                    </div>
                    <div class="post__footer">
                      <button type="button" class="btn btn-secondary edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Edit
                      </button>
                      <button type="button" class="btn btn-secondary delete" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                      </button>
                    </div>
                  </div>`
  $('.post-block').append(newPost)
  $('.post:last-child').find('.edit').click(() => {
    $('#title').val(p.title)
    $('#title').attr('data-id', p.article_id)
    $('#content').val(p.content)
  })
  $('.post:last-child').find('.delete').click(() => {
    $('#delete-model-title').attr('data-id', p.article_id)
    $('#delete-model-title').text(`Do you want to delete ${p.title} ?`)
  })
}
$().ready(() => {
  let username = null
  // check session
  $.ajax({
    url: 'http://localhost:3000/checkIfLogin',
    success: (res) => {
      username = res.username
    },
    error: (err) => { console.log(err) }
  })
  const limit = 5
  const offset = 0
  $.ajax({
    url: 'http://localhost:3000/getAll',
    data: {
      limit,
      offset
    },
    success: (res) => {
      res.forEach((r) => {
        newPost(r)
      })
      if (username === null) {
        $('.newpost').hide()
        $('.post__footer').hide()
        $('.login').show()
        $('.logout').hide()
      } else {
        $('.newpost').show()
        $('.post__footer').show()
        $('.logout').show()
        $('.login').hide()
      }
    },
    error: (err) => { console.log(err) }
  })
  // edit post
  $('.send').click(() => {
    const id = $('#title').attr('data-id')
    const title = $('#title').val()
    const content = $('#content').val()
    $.ajax({
      url: 'http://localhost:3000/edit',
      method: 'POST',
      data: {
        id,
        title,
        content
      },
      success: (res) => {
        location.reload()
        console.log(res)
      },
      error: (err) => { console.log(err) }
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
  // delete
  $('.handleDelete').click(() => {
    $.ajax({
      url: 'http://localhost:3000/delete',
      method: 'POST',
      data: {
        id: $('#delete-model-title').attr('data-id')
      },
      success: (res) => {
        location.reload()
        console.log(res)
      },
      error: (err) => { console.log(err) }
    })
  })
})
