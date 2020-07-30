'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('customer_addresses', [{                
        customer_id: 1,
        city_id:1,
        address: faker.address.streetAddress(),
        street: faker.address.streetName()
      }], {}),
      queryInterface.bulkInsert('customer_addresses', [{                
        customer_id: 1,
        city_id:1,
        address: faker.address.streetAddress(),
        street: faker.address.streetName()
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
