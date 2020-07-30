'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('payment_methods', [{                
        name: "Tarjeta de Credito"
      }], {}),
      queryInterface.bulkInsert('payment_methods', [{                
        name: "PSE"
      }], {}),
      queryInterface.bulkInsert('payment_methods', [{                
        name: "Efectivo"
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
