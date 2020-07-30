'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('cities', [{        
        id:1,
        name: 'Bucaramanga',
        country_id:2
      }], {}),
      queryInterface.bulkInsert('cities', [{        
        id:2,
        name: 'Bogota',
        country_id:1
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
