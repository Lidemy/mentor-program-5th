const newRow = (ele) => {
  const row = `<tr data-id=${ele.id}>
                      <th scope="row">${ele.id}</th>
                      <td>${ele.title}</td>
                      <td>${ele.img}</td>
                      <td>${ele.probabilities}</td>
                      <td>
                        <button type="button" class="btn btn-outline-light delete">Delete</button>
                        <button type="button" class="btn btn-outline-light edit" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                      </td>
                </tr>`
  $('tbody').append(row)
  $('tr:last-child>td>.edit').click((e) => {
    const id = $(e.target).parents('tr').attr('data-id')
    $('#prize-name').val(ele.title)
    $('#pic-img').val(ele.img)
    $('#weight').val(ele.probabilities)
    $('.edit-submit').click((e) => {
      console.log(id)
      $.ajax({
        url: 'http://localhost:5001/editPrize',
        method: 'POST',
        data: {
          id,
          title: $('#prize-name').val(),
          img: $('#pic-img').val(),
          probabilities: $('#weight').val()
        },
        success: (res) => {
          console.log(res)
          window.location = 'http://localhost:5001/back.html'
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  })
  $('tr:last-child>td>.delete').click((e) => {
    const id = $(e.target).parents('tr').attr('data-id')
    $.ajax({
      url: 'http://localhost:5001/deletePrize',
      method: 'POST',
      data: { id },
      success: (res) => {
        console.log(res)
        $(e.target).parents('tr').remove()
      },
      error: (err) => {
        console.log(err)
      }
    })
  })
}
$('.form-control-lg').keypress((e) => {
  if (e.keyCode === 13) {
    let input = true
    $('.form-control-lg').each(function() {
      if ($(this).val() === '') {
        input = false
      }
    })
    if (input === false) {
      $('.mt-4').attr('data-after', '*資料不全')
    }
    if ($($('.form-control-lg')[2]).val() < 0) {
      $('.mt-4').attr('data-after', '*請輸入正整數')
      input = false
    }
    if (input) {
      const title = $($('.form-control-lg')[0]).val()
      const img = $($('.form-control-lg')[1]).val()
      const probabilities = $($('.form-control-lg')[2]).val()
      $.ajax({
        url: 'http://localhost:5001/newPrize',
        method: 'POST',
        data: {
          title,
          img,
          probabilities
        },
        success: (res) => {
          newRow(res)
          $('.form-control-lg').each(function() {
            $(this).val('')
          })
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
})
$(document).ready(() => {
  $.ajax({
    url: 'http://localhost:5001/getAll',
    method: 'GET',
    success: (res) => {
      res.forEach((res) => {
        newRow(res)
      })
    },
    error: (err) => {
      console.log(err)
    }
  })
})
