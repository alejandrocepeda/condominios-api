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
        type:Sequelize.STRING
      },
      id_ubicacion_apartamento: {
        type:Sequelize.INTEGER
      },
      numero_apartamento: {
        type:Sequelize.INTEGER
      },
      conjunto_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('apartamentos');
  }
};
