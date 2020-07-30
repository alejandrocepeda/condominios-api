'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false,
        required:true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('permissions');
  }
};
