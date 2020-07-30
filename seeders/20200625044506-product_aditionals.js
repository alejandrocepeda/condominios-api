'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('aditionals', [{        
        name: faker.commerce.productName(),
        product_id: 1,
        unit_price: 2000
      }], {}),
      queryInterface.bulkInsert('aditionals', [{        
        name: faker.commerce.productName(),
        product_id: 1,
        unit_price: 2000
      }], {}),
      queryInterface.bulkInsert('aditionals', [{        
        name: faker.commerce.productName(),
        product_id: 1,
        unit_price: 2000
      }], {}),
      queryInterface.bulkInsert('aditionals', [{        
        name: faker.commerce.productName(),
        product_id: 2,
        unit_price: 2000
      }], {}),
      queryInterface.bulkInsert('aditionals', [{        
        name: faker.commerce.productName(),
        product_id: 2,
        unit_price: 2000
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
   return queryInterface.bulkDelete('product_aditionals', null, {});
  }
};
