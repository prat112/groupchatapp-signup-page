const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const messageData = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  groupId: {
    type: Sequelize.INTEGER, // Assuming groupId is of type INTEGER, adjust the data type if necessary
    allowNull: true, // Adjust allowNull as needed
  }
});

module.exports = messageData;
