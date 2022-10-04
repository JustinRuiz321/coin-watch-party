const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Coins extends Model {}

Coins.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type:
      }
    }
);

module.exports = Coins;