'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customer_addresses',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      customer_id: {
        type:Sequelize.INTEGER
      },
      city_id: {
        type:Sequelize.INTEGER
      },
      address: {
        type:Sequelize.STRING
      },
      street: {
        type:Sequelize.STRING
      },
      location_coordinates: {
        type:Sequelize.STRING
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customer_addresses');
  }
};
