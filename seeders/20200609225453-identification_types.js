'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('identification_types', [{        
        id:1,
        name: 'Cedula'
      }], {}),
      queryInterface.bulkInsert('identification_types', [{        
        id:2,
        name: 'Cedula Extranjeria'
      }], {}),
      queryInterface.bulkInsert('identification_types', [{        
        id:3,
        name: 'Pasaporte'
      }], {}),
      queryInterface.bulkInsert('identification_types', [{        
        id:4,
        name: 'Phone'
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
