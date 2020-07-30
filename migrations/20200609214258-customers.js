'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers',{
      id: {
          type:Sequelize.INTEGER,    
          autoIncrement:true,
          primaryKey:true
      },
      first_name: {
          type:Sequelize.STRING,
          allowNull:false
      },
      last_name: {
          type:Sequelize.STRING,  
          allowNull:false
      },        
      identification_number: {
          type:Sequelize.STRING,
      },      
      identification_type_id: {
          type:Sequelize.INTEGER,
      },            
      phone_country_code: {
          type:Sequelize.STRING          
      },
      phone_number: {
          type:Sequelize.STRING   
      },
      address_id: {
          type:Sequelize.INTEGER     
      },
      country_id: {
          type:Sequelize.INTEGER
      },      
      date_birth: {
          type:'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      actived: {
          type:Sequelize.BOOLEAN,               
      },
      gender: {
          type:Sequelize.STRING,          
      },
      social_provider: {
          type:Sequelize.STRING,   
      },
      confirmation_code: {
          type:Sequelize.STRING,   
      },
      pic: {
          type:Sequelize.STRING,   
      },
      vip: {
          type:Sequelize.BOOLEAN,   
      }   
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};
