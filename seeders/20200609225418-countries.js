'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('countries', [{        
        id:1,
        name: 'Colombia'
      }], {}),
      queryInterface.bulkInsert('countries', [{        
        id:2,
        name: 'Venezuela'
      }], {}),
      queryInterface.bulkInsert('countries', [{        
        id:3,
        name: 'Argentina'
      }], {}),
      queryInterface.bulkInsert('countries', [{        
        id:4,
        name: 'Mexico'
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
