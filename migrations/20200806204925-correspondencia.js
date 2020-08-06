'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('correspondencias',{
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
      residente_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('correspondencias');
  }
};
