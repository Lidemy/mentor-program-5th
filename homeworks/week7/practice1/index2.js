
document.querySelector('.produce').addEventListener('click', () => {
  let code = ''
  const func = (n, d) => {
    const ele = document.querySelector(`input[name=${n}]`)
    if (ele.checked) {
      code += d
    }
  }
  func('en', 'zxcvbnmasdfqwetuiopkl')
  func('num', '0123456789')
  func('sp', '/*-+#$%^()')
  let result = ''
  for (let i = 0; i < 10; i++) {
    result += code[Math.floor(Math.random() * code.length)]
  }
  document.querySelector('.result').innerText = result
})
