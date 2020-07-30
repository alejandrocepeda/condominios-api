'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('categories', [{        
        id:1,
        name: 'Restaurantes'
      }], {}),
      queryInterface.bulkInsert('categories', [{        
        id:2,
        name: 'Belleza'
      }], {}),
      queryInterface.bulkInsert('categories', [{        
        id:3,
        name: 'Deportes'
      }], {}),
      queryInterface.bulkInsert('categories', [{        
        id:4,
        name: 'Hogar'
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
