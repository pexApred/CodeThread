const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cohort extends Model {}

Cohort.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cohort',
  }
);

module.exports = Cohort;