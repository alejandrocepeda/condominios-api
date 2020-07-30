'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    return queryInterface.createTable('partners',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },      
      email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },      
      phone: {
        type:Sequelize.STRING
      },      
      address: {
        type:Sequelize.STRING
      },      
      location_coordinates: {
        type:Sequelize.STRING
      },
      status_id: {
        type:Sequelize.INTEGER,    
      },
      pic: {
        type: Sequelize.STRING,
      },
      friendly_url: {
        type:Sequelize.STRING,    
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('partners');
  }
}
