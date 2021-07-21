const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('lisa', 'lisa', 'lisa', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    freezeTableName: true,
    timestamps: false
  }
})
const prize = sequelize.define('prize', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING
  },
  probabilities: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: null
  }
})

sequelize.sync({ alter: true })

const prizeMethod = {
  ramdomPrize: async(cb) => {
    const p = await prize.findAll({
      where: {
        is_deleted: null
      }
    })
    let arr = []
    p.forEach((p) => {
      const prize = p.dataValues
      const a = new Array(prize.probabilities).fill(prize.id)
      arr = arr.concat(a)
    })
    const id = arr[Math.floor(Math.random() * arr.length)]
    const result = await prize.findAll({
      where: {
        id
      }
    })
    cb(result[0].dataValues)
  },
  getAll: async(cb) => {
    const p = await prize.findAll({
      where: {
        is_deleted: null
      }
    })
    cb(p)
  },
  newPrize: async(req, cb) => {
    const p = await prize.create({
      title: req.title,
      img: req.img,
      probabilities: req.probabilities
    })
    cb(p)
  },
  editPrize: async(req, cb) => {
    await prize.update({
      title: req.title,
      img: req.img,
      probabilities: req.probabilities
    }, {
      where: {
        id: req.id
      }
    })
    cb()
  },
  deletePrize: async(req, cb) => {
    await prize.update({ is_deleted: 1 }, {
      where: {
        id: req.id
      }
    })
    cb()
  }
}

module.exports = {
  prizeMethod
}
