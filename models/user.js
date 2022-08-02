const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please enter a username'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: {
          msg: 'Please enter your email'
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],

      },
    },
  },
  { 
    itemOne: {
      type: DataTypes.BOOLEAN,
    },
  },  
  { 
    itemTwo: {
      type: DataTypes.BOOLEAN,
    },
  },  
  { 
    itemThree: {
      type: DataTypes.BOOLEAN,
    },
  },  
  { 
    itemFour: {
      type: DataTypes.BOOLEAN,
    },
  },  
  { 
    itemFive: {
      type: DataTypes.BOOLEAN,
    },
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
