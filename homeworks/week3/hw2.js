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
  let [n,  m]=lines[0].split(' ').map(x=>Number(x))
  
  for(let i=n ; i<=m ; i++){
    let c=0, arr=[];
    let num = i
    
    while(num!=0){
      
      arr.push(num%10);
      num = Math.floor(num/10);
      c++;
      
    }
    

    let newArr = arr.map(item=>Math.pow(item,c));
    let sum=0;
    for(let j=0; j<newArr.length ; j++){
      sum += newArr[j];
    }
    if(sum == i){
      console.log(sum);
    }
  }
}