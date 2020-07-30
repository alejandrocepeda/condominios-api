'use strict';
const bcrypt = require('bcrypt')
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) =>  {

    const hash = await bcrypt.hash('010203', 10)

    return Promise.all([
      queryInterface.bulkInsert('users', [{
        id:1,
        name: 'Alejandro Cepeda',            
        email: 'alejandro.cepeda@tars.dev',
        password:hash,
        application_id:2,
        model_id:1,
        role_id:1
      }], {}),
      queryInterface.bulkInsert('users', [{        
        id:2,
        name: faker.name.findName(),            
        email: faker.internet.email(),
        password:hash,
        application_id:1,
        model_id:2,
        role_id:1
      }], {}),
      queryInterface.bulkInsert('users', [{        
        id:3,
        name: faker.name.findName(),            
        email: faker.internet.email(),
        password:hash,
        application_id:3,
        model_id:3,
        role_id:1
      }], {}),
      queryInterface.bulkInsert('users', [{        
        id:4,
        name: faker.name.findName(),            
        email: faker.internet.email(),
        password:hash,
        application_id:4,
        model_id:3,
        role_id:1
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
   return queryInterface.bulkDelete('users', null, {});
  }
};
