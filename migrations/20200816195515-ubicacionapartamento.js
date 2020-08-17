'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ubicacionapartamentos',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      nombre: {
        type:Sequelize.STRING
      },
      reporte: {
        type:Sequelize.STRING
      },
      estado: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ubicacionapartamentos');
  }
};
