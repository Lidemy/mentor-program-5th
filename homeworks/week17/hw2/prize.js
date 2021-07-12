const prize = [
  {
    prz: 'First',
    title: '恭喜你中頭獎了！日本東京來回雙人遊！',
    img: 'https://cdn.pixabay.com/photo/2019/07/04/06/35/flight-4315953_960_720.jpg',
    probability: 25
  },
  {
    prz: 'Second',
    title: '二獎！90 吋電視一台！',
    img: 'https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_960_720.jpg',
    probability: 25
  },
  {
    prz: 'Third',
    title: '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！',
    img: 'https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_960_720.jpg',
    probability: 25
  },
  {
    prz: 'None',
    title: '銘謝惠顧',
    img: 'https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1&resize=620%2C4000&ssl=1',
    probability: 25
  }
]
const getPrize = (prize) => {
  const result = Math.random() * 100
  const probabilities = prize.map((p) => p.probability)
  const [, s, t, n] = probabilities
  if (result < n) {
    return prize[3]
  } else if (n <= result && result < n + t) {
    return prize[2]
  } else if (n + t <= result && result < n + t + s) {
    return prize[1]
  } else {
    return prize[0]
  }
}
module.exports = {
  prize,
  getPrize
}
