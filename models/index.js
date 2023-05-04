// TODO: Define & lay out data for database (use sequelize and ORM)
const User = require('./User');
const Shirt = require('./Shirt');
const ShirtOrder = require('./ShirtOrder');

// User can have many ShirtOrders
User.hasOne(ShirtOrder, {
    foreignKey: 'user_id',
})

// A ShirtOrder belongs to one User
ShirtOrder.belongsTo(User, {
    foreignKey: 'user_id',
})

// A Shirt belongs to one ShirtOrder
ShirtOrder.belongsTo(Shirt, {
    foreignKey: 'shirt_id',
})

Shirt.hasOne(ShirtOrder, {
    foreignKey: 'shirt_id',
})

// TODO: Export models as an object
module.exports = { User, Shirt, ShirtOrder };