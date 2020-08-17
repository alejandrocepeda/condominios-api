'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('novedadesyfaltas',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      propietario_id: {
        type:Sequelize.INTEGER
      },
      reporte: {
        type:Sequelize.STRING
      },
      fecha_hora: {
        type:'TIMESTAMP',
        allowNull:false
      },
      conjunto_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('novedadesyfaltas');
  }
};
