// TODO: Define & lay out data for database (use sequelize and ORM)
const User = require('./User');
const Shirt = require('./Shirt');
const ShirtOrder = require('./ShirtOrder');

// User can have many ShirtOrders
User.hasMany(ShirtOrder, {
    foreignKey: 'user_id',
})

// A ShirtOrder belongs to one User
ShirtOrder.belongsTo(User, {
    foreignKey: 'user_id',
})

// A Shirt belongs to one ShirtOrder
Shirt.belongsTo(ShirtOrder, {
    foreignKey: 'shirt_id',
})

ShirtOrder.hasOne(Shirt, {
    foreignKey: 'shirt_id',
})

// TODO: Export models as an object
module.exports = { User, Shirt, ShirtOrder };