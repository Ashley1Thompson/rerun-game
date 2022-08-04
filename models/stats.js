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
<<<<<<< HEAD
   
    bestRun: {
      type: DataTypes.TIME,
      },
=======

    bestRun: {
      type: DataTypes.TIME,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
>>>>>>> f594e1b08b233fd5330cd4d76836779c0c5c6a6d

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
