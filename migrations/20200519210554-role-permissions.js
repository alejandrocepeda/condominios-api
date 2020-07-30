'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role_permissions',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      role_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        required:true
      },
      permission_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        required:true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role_permissions');
  }
};
