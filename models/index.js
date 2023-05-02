// TODO: Define & lay out data for database (use sequelize and ORM)
const User = require('./User');
const Shirt = require('./Shirt');
const Cohort = require('./Cohort');
const ShirtOrder = require('./ShirtOrder');

// A ShirtOrder belongs to one User
ShirtOrder.belongsTo(User, {
    foreignKey: 'user_id',
})

// User can have many ShirtOrders
User.hasMany(ShirtOrder, {
    foreignKey: 'user_id',
})

// A Shirt belongs to one ShirtOrder
Shirt.belongsTo(ShirtOrder, {
    foreignKey: 'shirtOrder_id',
})

// ShirtOrder can have many Shirts
// When we delete a ShirtOrder, make sure to delete the associated Shirts
ShirtOrder.hasMany(Shirt, {
    foreignKey: 'shirtOrder_id',
    onDelete: 'CASCADE',
})

// A Shirt belongs to one User
Shirt.belongsTo(User, {
    foreignKey: 'user_id',
})

// A User can have many Shirts
// User.hasMany(Shirt, {
//     foreignKey: 'user_id',
// })

// A Shirt belongs to one Cohort
Shirt.belongsTo(Cohort, {
    foreignKey: 'cohort_id',
})

// A Cohort can have many Shirts
Cohort.hasMany(Shirt, {
    foreignKey: 'cohort_id',
})

// TODO: Export models as an object
module.exports = { User, Shirt, Cohort, ShirtOrder };