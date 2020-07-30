'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('customers', [{        
        first_name: faker.name.firstName(),            
        last_name: faker.name.lastName(),        
        identification_number:faker.random.number(),
        identification_type_id:1,        
        phone_country_code: faker.address.countryCode(),            
        phone_number: faker.phone.phoneNumber(),
        address_id:1,
        country_id:1,
        date_birth:new Date(),
        actived: true,
        gender:"M",
        social_provider:"phone",
        confirmation_code:faker.random.number(),
        pic:'https://i.pravatar.cc/300',
        vip: false
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
