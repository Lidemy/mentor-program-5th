const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  for (let i = 1; i <= lines[0]; i++) {
    const n = lines[i]
    if (n === 1) {
      console.log('Composite')
    } else if (n === 2) {
      console.log('Prime')
    } else {
      let c = 0
      for (let j = 2; j < n; j++) {
        if (n % j === 0) {
          console.log('Composite')
          c++
          break
        }
      }
      if (c === 0) {
        console.log('Prime')
      }
    }
  }
}
