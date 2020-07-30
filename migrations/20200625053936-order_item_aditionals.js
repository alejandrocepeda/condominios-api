'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_item_aditionals',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      order_item_id: {
        type:Sequelize.INTEGER
      },
      aditional_id: {
        type:Sequelize.INTEGER
      },
      quantity: {
        type:Sequelize.INTEGER
      },
      unit_price: {
        type:Sequelize.FLOAT
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_item_aditionals');
  }
};
