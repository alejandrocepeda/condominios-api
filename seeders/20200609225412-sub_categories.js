'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('sub_categories', [{        
        id:1,
        name: 'Pastas',
        category_id:1
      }], {}),
      queryInterface.bulkInsert('sub_categories', [{        
        id:2,
        name: 'Sushi',
        category_id:1
      }], {}),
      queryInterface.bulkInsert('sub_categories', [{        
        id:3,
        name: 'Pollo',
        category_id:1
      }], {}),
      queryInterface.bulkInsert('sub_categories', [{        
        id:4,
        name: 'Carnes',
        category_id:1
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
