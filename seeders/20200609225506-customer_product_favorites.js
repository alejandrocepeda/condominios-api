'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('customer_product_favorites', [{                
        customer_id: 1,
        product_id:1
      }], {}),
      queryInterface.bulkInsert('customer_product_favorites', [{                
        customer_id: 1,
        product_id:2
      }], {}),
      queryInterface.bulkInsert('customer_product_favorites', [{                
        customer_id: 1,
        product_id:3
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
