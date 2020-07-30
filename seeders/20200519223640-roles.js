'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.bulkInsert('roles', [{
        id:1,
        name: 'Admin'
      }], {}),
      queryInterface.bulkInsert('roles', [{
        id:2,
        name: 'Customer'
      }], {}),
      queryInterface.bulkInsert('roles', [{
        id:3,
        name: 'Dispatcher'
      }], {}),
      queryInterface.bulkInsert('roles', [{
        id:4,
        name: 'Owner'
      }], {}),
      queryInterface.bulkInsert('roles', [{
        id:5,
        name: 'Distributor'
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
   return queryInterface.bulkDelete('roles', null, {});
  }
};
