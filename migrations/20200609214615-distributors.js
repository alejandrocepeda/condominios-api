'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('distributors',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      first_name: {
        type:Sequelize.STRING
      },
      last_name: {
        type:Sequelize.STRING
      },      
      identification_number: {
        type:Sequelize.STRING
      },
      identification_type_id: {
        type:Sequelize.INTEGER
      },      
      phone_country_code: {
        type:Sequelize.STRING
      },
      phone_number: {
        type:Sequelize.STRING
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
      actived: {
        type:Sequelize.BOOLEAN
      },
      date_birth: {
        type:'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      pic: {
        type:Sequelize.STRING
      },
      location_coordinates: {
        type:Sequelize.STRING
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('distributors');
  }
};
