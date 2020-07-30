'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('order_statuses', [{                
        id:1,
        name: "Pending"
      }], {}),
      queryInterface.bulkInsert('order_statuses', [{                
        id:2,
        name: "Accepted"
      }], {}),
      queryInterface.bulkInsert('order_statuses', [{                
        id:3,
        name: "Declined"
      }], {}),
      queryInterface.bulkInsert('order_statuses', [{                
        id:4,
        name: "Delivered"
      }], {}),
      queryInterface.bulkInsert('order_statuses', [{                
        id:5,
        name: "Closed"
      }], {}),
      queryInterface.bulkInsert('order_statuses', [{                
        id:6,
        name: "Dispatching"
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
