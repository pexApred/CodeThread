const { faker } = require('@faker-js/faker');

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
        // console.log(`Email: ${email}, Name: ${randomName}, Password: ${randomPassword}`);
    }
    return { users: users };
}
module.exports = generateUsers;

let userData = JSON.stringify(generateUsers());
console.log(userData);

