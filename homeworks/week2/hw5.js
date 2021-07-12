function join(arr, concatStr) {
  let str = arr[0]
  for (let i = 1; i < arr.length; i++) {
    str += concatStr
    str += arr[i]
  }
  return str
}

function repeat(str, times) {
  let str1 = ''
  for (let i = 0; i < times; i++) {
    str1 += str
  }
  return str1
}

console.log(join(['a'], '!'))
console.log(repeat('a', 5))
