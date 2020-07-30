'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('reasons_decline_orders', [{                
        id:1,
        name: "Busy"
      }], {}),
      queryInterface.bulkInsert('reasons_decline_orders', [{                
        id:2,
        name: "Product not available"
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
