'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('confirmation_codes',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      code: {
        type:Sequelize.STRING,
        allowNull:false
      },
      verified: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      phone_number : {
        type: Sequelize.STRING,
        allowNull:false
      },
      date_time_expire: {        
        type:'TIMESTAMP'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('confirmation_codes');
  }
};
