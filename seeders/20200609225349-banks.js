'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('banks', [{        
        name: faker.company.companyName()
      }], {}),
      queryInterface.bulkInsert('banks', [{        
        name: faker.company.companyName()
      }], {}),
      queryInterface.bulkInsert('banks', [{        
        name: faker.company.companyName()
      }], {}),
      queryInterface.bulkInsert('banks', [{        
        name: faker.company.companyName()
      }], {}),
      queryInterface.bulkInsert('banks', [{        
        name: faker.company.companyName()
      }], {}),
      queryInterface.bulkInsert('banks', [{        
        name: faker.company.companyName()
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
