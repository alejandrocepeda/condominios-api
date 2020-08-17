'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comunicados',{
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
      fecha_desde: {
        type:Sequelize.DATE
      },
      fecha_hasta: {
        type:Sequelize.DATE
      },
      fecha_creacion: {
        type:Sequelize.DATE
      },
      conjunto_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comunicados');
  }
};
