// 位元運算出a+b
// eslint-disable-next-line no-unused-vars
function add(a, b) {
  const arr = []
  let c = 0; let s = 0

  while (a !== 0 || b !== 0) {
    const x = a & 1
    const y = b & 1
    a = a >> 1
    b = b >> 1
    if (c === 1) {
      c = x & y
      s = x ^ y
      if (c === 0 && s === 0) {
        c = 0
      } else {
        c = 1
      }
      /* c = c + s & 1 */
      s = s ^ 1
    } else {
      c = x & y
      s = x ^ y
    }

    arr.push(s)

    if (a === 0 && b === 0) {
      arr.push(c)
    }
  }
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum ^ (arr[i] << i)
  }

  console.log(sum)
}
