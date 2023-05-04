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

    // shirtOrder_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'shirtOrder',
    //     key: 'id',
    //   },
    // },
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

Handlebars.registerHelper('checked', function(value, test) {
  if (value == undefined) return '';
  return value==test ? 'checked' : '';
});

module.exports = Shirt;