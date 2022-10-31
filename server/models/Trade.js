const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trade extends Model {}

Trade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shares: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    exitDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    entryPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    exitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PnL: {
      type: DataTypes.DECIMAL,
      allowNull: false
      // this would be [(exitPrice - entryPrice) * shares]
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'trade'
  }
)

module.exports = Trade