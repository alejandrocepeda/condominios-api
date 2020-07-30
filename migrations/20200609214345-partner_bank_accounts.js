'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partner_bank_accounts',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      partner_id: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },
      bank_id: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },
      number: {
        type:Sequelize.INTEGER,    
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('partner_bank_accounts');
  }
};
