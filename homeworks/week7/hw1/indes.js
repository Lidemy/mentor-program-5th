
document.querySelector('input[type=submit]').addEventListener('click', () => {
  for (let i = 0; i < 4; i++) {
    if (!document.querySelectorAll('.block>input')[i].value) {
      document.querySelectorAll('.hidden')[i].style.visibility = 'visible'
    } else {
      document.querySelectorAll('.hidden')[i].style.visibility = 'hidden'
    }
  }

  const a = document.querySelectorAll(' .block__choice>input')[0].checked
  const b = document.querySelectorAll(' .block__choice>input')[1].checked
  if (!(a || b)) {
    document.querySelector('.hidden2').style.visibility = 'visible'
  } else {
    document.querySelector('.hidden2').style.visibility = 'hidden'
  }
  const c = [...document.querySelectorAll('.block>input:not(#input_other)')].every((item) => item.value)

  const str = `${document.querySelectorAll('.block>input')[0].value}\n${
            document.querySelectorAll('.block>input')[1].value}\n${
            document.querySelectorAll('.block>input')[2].value}\n${
            document.querySelectorAll('.block>input')[3].value}\n${
            document.querySelectorAll('.block>input')[4].value}`
  if ((a || b) && c) {
    alert(str)
  }
})
