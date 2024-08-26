const { faker } = require('@faker-js/faker');
require('dotenv').config();

module.exports = {
    username: process.env.SAUCE_VALID_USER,
    password: process.env.SAUCE_PASSWORD,
    lockedUsername: process.env.SAUCE_LOCKED_USER,
    invalidUsername: faker.internet.userName(),
    invalidPassword: faker.internet.password()
};
