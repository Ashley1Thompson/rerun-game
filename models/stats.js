const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    }
  },

  {  
    bestRun: {
      type: DataTypes.TIME,
      }
  },
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
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
