function capitalize(str) {
    let newStr = str[0].toUpperCase();
    let str1 = str.slice(1)
    return newStr.concat(str1);
}

console.log(capitalize('hello'));
