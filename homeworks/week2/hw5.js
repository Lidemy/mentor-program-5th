function join(arr, concatStr) {
  var temp = ''
    if (arr.length === 1) {
     temp = arr[0] + concatStr
    } else {
      for (i = 1; i <arr.length; i++) {
        if (i === arr.length -1) {
          temp += arr[i]
        } else {
          temp = arr[i] + concatStr
        }
      }
    }
  return temp
}
console.log(join(['a'],'!'))

function repeat(str, times) {
  var result = ''
  for (i=1;i<=times;i++){
    result += str
  }
  return result
}
console.log(repeat('a', 5))
