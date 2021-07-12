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
  const arr = lines[0].split(' ').map(Number)
  const list = []
  const nums = []
  for (let i = 1; i <= arr[0]; i++) {
    list.push(Number(lines[i]))
  }
  for (let i = 1; i <= arr[1]; i++) {
    nums.push(Number(lines[arr[0] + i]))

    let min = 0; let max = list.length - 1

    let num = -1
    while (max >= min) {
      const mid = Math.floor((max + min) / 2)

      if (nums[i - 1] === list[mid]) {
        num = mid
        break
      } else if (nums[i - 1] > list[mid]) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    }

    console.log(num)
  }
}
