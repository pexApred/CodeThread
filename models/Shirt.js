const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shirt extends Model {}

Shirt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
    shirtOrder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shirtOrder',
        key: 'id',
      },
    },
    cohort_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cohort',
        key: 'id',
      },
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