const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    allTimeHighUSD: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
    },
    maxSupply: {
      type: DataTypes.STRING,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
