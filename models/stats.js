// const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    bestRun: {
      type: DataTypes.TIME,
    },

    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
      
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stats',
  }
);

module.exports = Stats;
