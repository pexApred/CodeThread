const sequelize = require('../config/connection');
const { User, Shirt, ShirtOrder } = require('../models');

const userData = require('./userData.json');
const orderData = require('./orderData_test2.json');
const shirtData = require('./shirtData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');

    await Shirt.bulkCreate(shirtData);

    console.log('\n----- SHIRTS SEEDED -----\n');
  
    await ShirtOrder.bulkCreate(orderData);

    console.log('\n----- SHIRT ORDERS SEEDED -----\n');

    process.exit(0);
  };
  
  seedDatabase();