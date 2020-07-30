'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('role_permissions', [{
        id:1,
        role_id: 1,         
        permission_id: 1
      }], {}),
      queryInterface.bulkInsert('role_permissions', [{
        id:2,
        role_id: 1,         
        permission_id: 2
      }], {}),
      queryInterface.bulkInsert('role_permissions', [{
        id:3,
        role_id: 1,         
        permission_id: 3
      }], {}),
      queryInterface.bulkInsert('role_permissions', [{
        id:4,
        role_id: 1,         
        permission_id: 4
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
   return queryInterface.bulkDelete('role_permissions', null, {});
  }
};
