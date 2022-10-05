const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Coins extends Model {}

Coins.init(
    {
      coin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'coins',    
    }
);

module.exports = Coins;