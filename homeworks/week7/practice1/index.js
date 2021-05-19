document.querySelector('.produce').addEventListener('click', () => {
  const elements = document.querySelectorAll('input[type=checkbox]')
  let code = ''
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      code += elements[i].getAttribute('data')
    }
  }
  let result = ''
  for (let i = 0; i < 10; i++) {
    result += code[Math.floor(Math.random() * code.length)]
  }
  document.querySelector('.result').innerText = result
})
