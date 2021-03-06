'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parqueaderos',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      conjunto_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      apartamento_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      tipo_parqueadero: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parqueaderos');
  }
};
