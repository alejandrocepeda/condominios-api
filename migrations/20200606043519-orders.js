'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    return queryInterface.createTable('orders',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      customer_id: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },
      customer_address_id: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },
      partner_id: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },      
      date_time: {
        type:'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull:false
      },      
      payment_method_id: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },      
      total_amount: {
        type:Sequelize.INTEGER,    
        allowNull:false
      },
      status_id: {
        type:Sequelize.INTEGER,            
      },
      delivered_time: {
        type:Sequelize.STRING,            
      },
      distributor_id: {
        type:Sequelize.INTEGER,    
      },
      decline_reason: {
        type:Sequelize.STRING,
      },
      ready_time : {
        type:Sequelize.INTEGER
      },
      distributor_is_like:{
        type:Sequelize.INTEGER,    
        defaultValue: null
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
}
