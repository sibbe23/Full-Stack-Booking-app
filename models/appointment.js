const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Appointment = sequelize.define('appointment',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone:{
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

module.exports = Appointment;