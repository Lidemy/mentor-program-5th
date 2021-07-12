const fortunes = [
  'a',
  'b',
  'c',
  'd'
]
exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length)
  return fortunes[idx]
}
