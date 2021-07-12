function capitalize(str) {
  const newStr = str[0].toUpperCase()
  const str1 = str.slice(1)
  return newStr.concat(str1)
}

console.log(capitalize('hello'))
