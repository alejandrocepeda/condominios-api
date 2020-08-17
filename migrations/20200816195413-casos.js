'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('casos',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      titulo: {
        type:Sequelize.STRING
      },
      descripcion: {
        type:Sequelize.STRING
      },
      fecha: {
        type:Sequelize.DATE
      },
      conjunto_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('casos');
  }
};
