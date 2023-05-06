// I am not sure of the proper procedures for implementing faker. I'd like us to talk to Moses on Monday to go over what I did and whether this is acceptable. There is most certainly a better way to do this, but time is ticking. 

// A second observation... Right now we are attaching the address, city, state, etc... onto the SHIRT ORDER. This means that we are generating a new pretend address for each user every time they make an order. This is confusing and only makes sense if we assume that a user moves after every shirt order. :-) Not likely. It might make more sense to move the address, city, state, etc... to the user model and to then pull that in for the shirt orders.  

const { faker } = require('@faker-js/faker');
const fs = require('fs')

function generateUsers() {
    let users = [];
    for (let id = 1; id <= 10; id++) {
        const randomName = faker.name.fullName();
        const email = faker.internet.email(randomName);
        const randomPassword = faker.internet.password();
        users.push({
            name: randomName,
            email: email,
            password: randomPassword,
        });
    }
    return { users: users };
}
module.exports = generateUsers;

const userData = JSON.stringify(generateUsers());
console.log(userData);

fs.writeFile('./seeds/userData_test.json', userData, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);


function generateOrders() {
    let orders = [];
    for (let id = 1; id <= 10; id++) {
        // Right now there are only 3 shirt ids. Thus, there needs to only be 3 elements within this array. 
        const shirtId = faker.helpers.arrayElement(['1', '2', '3'])
        // There are 10 users generated by faker. Thus, ten user_ids. 
        const userId = faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        const color = faker.color.human()
        const size = faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL'])
        const city = faker.address.city()
        const address = faker.address.streetAddress()
        const state = faker.address.state()
        const zip = faker.address.zipCode()
        const apt = faker.address.secondaryAddress()
        
        orders.push({
            shirt_id: shirtId,
            user_id: userId,
            color: color,
            size: size,
            city: city,
            address: address,
            state: state,
            zip: zip,
            apt: apt,
        });
    }
    return { orders: orders };
}

const orderData = JSON.stringify(generateOrders());
console.log(orderData);

fs.writeFile('./seeds/orderData_test.json', orderData, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);