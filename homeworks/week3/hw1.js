var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});


rl.on('close', function() {
  solve(lines)
})


function solve(lines){
  let n = Number(lines[0])
  for(let i=1 ; i<=n; i++){
    let str=''
    for(let j=1; j<=i ;j++){
      str+='*'
    }
    console.log(str)
  }

}