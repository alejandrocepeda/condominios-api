'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('partner_bank_accounts', [{                
        partner_id: 1,
        bank_id:1,
        number:faker.random.number()
      }], {}),
      queryInterface.bulkInsert('partner_bank_accounts', [{                
        partner_id: 1,
        bank_id:2,
        number:faker.random.number()
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
