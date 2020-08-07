'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('apartamentos',{
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
        primaryKey:true
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('apartamentos');
  }
};
