'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('residentes',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('residentes');
  }
};
