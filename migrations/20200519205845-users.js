'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    return queryInterface.createTable('users',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      password: {
        type:Sequelize.STRING
      },
      application_id: {
        type:Sequelize.INTEGER,    
      },
      model_id: {
        type:Sequelize.INTEGER,    
      },
      role_id: {
        type:Sequelize.INTEGER,    
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
