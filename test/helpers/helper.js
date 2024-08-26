const { faker } = require("@faker-js/faker");

const validCustomer = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  postalCode: faker.location.zipCode(),
};

module.exports = {
  validCustomer,
};
