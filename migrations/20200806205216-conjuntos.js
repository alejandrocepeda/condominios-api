'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('conjuntos',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      direccion: {
        type:Sequelize.STRING
      },
      nit: {
        type:Sequelize.STRING
      },
      tipo_conjunto_id: {
        type:Sequelize.INTEGER
      },
      ciudad_id: {
        type:Sequelize.INTEGER
      },
      pais_id: {
        type:Sequelize.INTEGER
      },
      moneda: {
        type:Sequelize.STRING
      },
      logo: {
        type:Sequelize.STRING
      },
      pago_electronico: {
        type:Sequelize.BOOLEAN
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('conjuntos');
  }
};
