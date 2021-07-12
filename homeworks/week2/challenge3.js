function multiply(a, b) {
  if (a === '0' || b === '0') {
    return 0
  }
  const A = a.length - 1
  const B = b.length - 1
  let c = 0
  const arr = []
  for (let i = B; i >= 0; i--) {
    for (let j = A; j >= 0; j--) {
      if (c === 0) {
        arr.push(b[i] * a[j])
      } else {
        if (j !== 0) {
          arr[c + A - j] += b[i] * a[j]
        } else {
          arr.push(b[i] * a[j])
        }
      }
    }
    c++
  }
  const ans = []
  for (let i = 0; i < arr.length - 1; i++) {
    ans.push(arr[i] % 10)
    const k = Math.floor(arr[i] / 10)
    arr[i + 1] += k
  }
  ans.push(arr[arr.length - 1] % 10)
  const k = Math.floor(arr[arr.length - 1] / 10)
  if (k > 0) {
    ans.push(k)
  }
  console.log(ans.reverse().join(''))
}

multiply('123', '456')
