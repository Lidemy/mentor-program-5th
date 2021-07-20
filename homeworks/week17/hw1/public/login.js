
$().ready(() => {
  $('.send').click(() => {
    if ($('#account').val() !== '' && $('#password').val() !== '') {
      const username = $('#account').val()
      const password = $('#password').val()
      $.ajax({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          username,
          password
        },
        success: (res) => {
          if (res === 'login success!') {
            $('.alert').text('Login Success! Go To Home Page in 2 sec!')
            $('.alert').show()
            window.setTimeout(() => { location.replace('http://localhost:3000/') }, 2000)
          } else {
            $('.alert').text('Login Fail!')
            $('.alert').show()
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  })
})
