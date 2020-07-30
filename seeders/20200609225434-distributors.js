'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('distributors', [{                
        first_name: faker.name.firstName(),            
        last_name: faker.name.lastName(),        
        identification_number:faker.random.number(),
        identification_type_id:1,        
        phone_country_code: faker.address.countryCode(),            
        phone_number: faker.phone.phoneNumber(),
        city_id:1,
        address:faker.address.streetAddress(),
        street: faker.address.streetName(),
        actived:true,
        date_birth:new Date(),
        pic: 'https://i.pravatar.cc/300'
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
