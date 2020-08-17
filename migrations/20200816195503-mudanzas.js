'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mudanzas',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      apartamento_id: {
        type:Sequelize.INTEGER
      },
      placa_vehiculo: {
        type:Sequelize.STRING
      },
      desde: {
        type:'TIMESTAMP',
        allowNull:false
      },
      hasta: {
        type:'TIMESTAMP',
        allowNull:false
      },
      conjunto_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mudanzas');
  }
};
