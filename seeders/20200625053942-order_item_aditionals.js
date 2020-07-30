'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('order_item_aditionals', [{                
        order_item_id: 1,
        aditional_id:1,
        quantity: 1,
        unit_price: 10000
      }], {}),
      queryInterface.bulkInsert('order_item_aditionals', [{                
        order_item_id: 3,
        aditional_id:2,
        quantity: 1,
        unit_price: 10000
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
