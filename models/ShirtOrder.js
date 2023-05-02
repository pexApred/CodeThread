const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ShirtOrder extends Model { }

ShirtOrder.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Use 'UUID' to generate unique "order_number" identifier
        order_number: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
        user_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'shirtOrder',
    }
);

module.exports = ShirtOrder;