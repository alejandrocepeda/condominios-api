'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('order_items', [{                
        order_id: 1,
        product_id:1,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 1,
        product_id:2,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 1,
        product_id:3,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 1,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 2,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 2,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 3,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 4,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 5,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 6,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 7,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 8,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 9,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
      }], {}),
      queryInterface.bulkInsert('order_items', [{                
        order_id: 10,
        product_id:4,
        quantity: 1,
        unit_price: faker.commerce.price(),
        ready_time:30,
        customer_instructions:faker.random.words()
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
