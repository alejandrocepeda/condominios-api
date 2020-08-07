'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('proveedores',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING
      },
      nit: {
        type:Sequelize.STRING
      },
      direccion: {
        type:Sequelize.STRING
      },
      licitaciones: {
        type:Sequelize.BOOLEAN
      },
      referido: {
        type:Sequelize.STRING
      },
      telefono: {
        type:Sequelize.STRING
      },
      celular: {
        type:Sequelize.STRING
      },
      correo: {
        type:Sequelize.STRING
      },
      sitio_web: {
        type:Sequelize.STRING
      },
      categoria: {
        type:Sequelize.BOOLEAN
      },
      cantidad: {
        type:Sequelize.INTEGER
      },
      conjunto_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('proveedores');
  }
};
