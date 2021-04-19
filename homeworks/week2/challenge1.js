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
 
 let arr = lines[0].split(' ').map(Number);
 let list=[];
 let nums=[];
 for(let i=1 ; i<=arr[0] ;i++){
   list.push(Number(lines[i]))
 }
 for(let i=1; i<=arr[1]; i++){
   nums.push(Number(lines[arr[0]+i]))

   let min = 0, max = list.length-1;
   
   let num = -1;
   while( max>=min){
    mid = Math.floor((max+min)/2)
   
    if(nums[i-1] ===list[mid]){
      num = mid;
      break;
    }
    else if(nums[i-1]>list[mid]){
      min = mid +1;
    }
    else{
      max = mid-1;
    }
   }

  console.log(num);
 }
 
}