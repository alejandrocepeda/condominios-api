'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parqueaderos',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      conjunto_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      residente_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      }
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parqueaderos');
  }
};
