'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_items',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      order_id: {
        type:Sequelize.INTEGER
      },
      product_id: {
        type:Sequelize.INTEGER
      },
      quantity: {
        type:Sequelize.INTEGER
      },
      unit_price: {
        type:Sequelize.FLOAT
      },
      ready_time: {
        type:Sequelize.INTEGER
      },
      customer_instructions: {
        type:Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_items');
  }
};
