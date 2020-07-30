'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_permissions',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      user_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        required:true
      },
      permission_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        required:true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_permissions');
  }
};
