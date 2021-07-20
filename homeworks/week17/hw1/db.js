const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('./conn.js')

const admins = sequelize.define('admins', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
const articles = sequelize.define('articles', {
  article_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
})

sequelize.sync({ alter: true })
const controlArticle = {
  add: async(title, content, cb) => {
    await articles.create({
      title,
      content
    })
    cb()
  },
  delete: async(id, cb) => {
    await articles.update({
      is_deleted: true
    }, {
      where: {
        article_id: id
      }
    })
    cb()
  },
  edit: async(id, title, content, cb) => {
    await articles.update({
      title,
      content
    }, {
      where: {
        article_id: id
      }
    })
    cb()
  },
  getAll: async(limit, offset, cb) => {
    const a = await articles.findAll({
      limit,
      offset,
      where: {
        is_deleted: 0
      },
      order: [['article_id', 'DESC']]
    })
    cb(a)
  }
}

const controlLogin = {
  login: async(username, password, cb) => {
    const a = await admins.findAll({
      where: {
        username,
        password
      }
    })
    cb(a)
  }
}

module.exports = {
  controlArticle,
  controlLogin
}
