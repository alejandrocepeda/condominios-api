'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('permissions', [{
        id:1,
        name: 'store:users'
      }], {}),
      queryInterface.bulkInsert('permissions', [{        
        id:2,
        name: 'show:users'
      }], {}),
      queryInterface.bulkInsert('permissions', [{        
        id:3,
        name: 'destroy:users'
      }], {}),
      queryInterface.bulkInsert('permissions', [{        
        id:4,
        name: 'update:users'
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
   return queryInterface.bulkDelete('permissions', null, {});
  }
};
