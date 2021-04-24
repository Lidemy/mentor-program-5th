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
  const [h, w] = lines[0].split(' ').map((n) => Number(n))
  if (h === 1 && w === 1) {
    console.log(0)
    return 0
  }
  const maze = Array.from(Array(h), () => Array(w))
  for (let i = 1; i <= h; i++) {
    for (let j = 0; j < w; j++) {
      maze[i - 1][j] = lines[i][j]
    }
  }
  const arr = []
  let i = 0
  let j = 0
  let c = 0

  while (!(i === (h - 1) && j === (w - 1))) {
    maze[i][j] = '#'
    i++
    if (i > 0 && i < h) {
      if (maze[i][j] !== '#') {
        let d = 0
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].x === i && arr[k].y === j) {
            d++
            break
          }
        }
        if (d === 0) {
          arr.push({
            x: i,
            y: j,
            c
          })
        }
      }
    }
    i -= 2
    if (i > 0 && i < h) {
      if (maze[i][j] !== '#') {
        let d = 0
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].x === i && arr[k].y === j) {
            d++
            break
          }
        }
        if (d === 0) {
          arr.push({
            x: i,
            y: j,
            c
          })
        }
      }
    }
    i++
    j++
    if (j > 0 && j < w) {
      if (maze[i][j] !== '#') {
        let d = 0
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].x === i && arr[k].y === j) {
            d++
            break
          }
        }
        if (d === 0) {
          arr.push({
            x: i,
            y: j,
            c
          })
        }
      }
    }
    j -= 2
    if (j > 0 && j < w) {
      if (maze[i][j] !== '#') {
        let d = 0
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].x === i && arr[k].y === j) {
            d++
            break
          }
        }
        if (d === 0) {
          arr.push({
            x: i,
            y: j,
            c
          })
        }
      }
    }
    i = arr[0].x
    j = arr[0].y
    c = arr[0].c + 1
    arr.shift()
  }
  console.log(c)
}
