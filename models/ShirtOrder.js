const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { v4: UUIDV4 } = require('uuid');

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
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apt: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shirt_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'shirt',
                key: 'id',
            },
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
//Include shirt ID

module.exports = ShirtOrder;