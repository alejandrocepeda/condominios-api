'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('visitantes',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING
      },
      cedula: {
        type:Sequelize.STRING
      },
      apartamento_id: {
        type:Sequelize.INTEGER
      },
      autorizacion: {
        type:Sequelize.STRING
      },      
      placa: {
        type:Sequelize.STRING
      },      
      puesto: {
        type:Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('visitantes');
  }
};
