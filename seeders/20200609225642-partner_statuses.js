'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('partner_statuses', [{      
        id:1,          
        name: "Available",
        description:"Receive orders"
      }], {}),
      queryInterface.bulkInsert('partner_statuses', [{                
        id:2,          
        name: "Busy",
        description:"Delay in orders"
      }], {}),
      queryInterface.bulkInsert('partner_statuses', [{                
        id:3,          
        name: "Not available",
        description:"Stop orders"
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
