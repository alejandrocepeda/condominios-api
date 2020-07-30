'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('applications', [{      
        id:1,  
        name: "customer"
      }], {}),
      queryInterface.bulkInsert('applications', [{        
        id:2,  
        name: "partner"
      }], {}),
      queryInterface.bulkInsert('applications', [{        
        id:3,  
        name: "distributor"
      }], {}),
      queryInterface.bulkInsert('applications', [{        
        id:4,  
        name: "helpcenter"
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
