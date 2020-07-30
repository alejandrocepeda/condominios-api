'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) =>  {

    return Promise.all([
      queryInterface.bulkInsert('partners', [{        
        name: faker.company.companyName(),            
        email: faker.internet.email(),        
        phone:faker.phone.phoneNumber(),
        address:faker.address.streetAddress(),
        status_id:1,
        pic:faker.image.imageUrl(),
        friendly_url: faker.image.imageUrl()
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
   return queryInterface.bulkDelete('partners', null, {});
  }
};
