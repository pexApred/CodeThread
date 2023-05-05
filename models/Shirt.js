const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const exphbs = require('express-handlebars');

class Shirt extends Model {}

Shirt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
    },
    cohort_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shirt',
  }
);

module.exports = Shirt;