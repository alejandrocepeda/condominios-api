'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aditionals',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      product_id: {
        type: Sequelize.INTEGER ,
        allowNull:false
      },
      unit_price : {
        type: Sequelize.FLOAT
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aditionals');
  }
};
