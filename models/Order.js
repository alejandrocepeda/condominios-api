'use strict'

module.exports = (sequelize,DataTypes) => {
  let Order = sequelize.define('orders',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      customer_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
      },
      customer_address_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
      },
      partner_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
      },      
      date_time: {
        type:'TIMESTAMP',        
        allowNull:false
      },      
      payment_method_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
      },      
      total_amount: {
        type:DataTypes.FLOAT,    
        allowNull:false
      },
      status_id: {
        type:DataTypes.INTEGER,            
      },
      delivered_time: {
        type:DataTypes.STRING,            
      },
      distributor_id: {
        type:DataTypes.INTEGER,    
      },
      decline_reason: {
        type:DataTypes.STRING,
      },
      ready_time: {
        type:DataTypes.INTEGER
      },
      distributor_is_like: {
        type:DataTypes.INTEGER,
        defaultValue: null
      }
  })
  
  Order.associate = (models) => {
    Order.belongsTo(models.partners,{                    
        foreignKey: 'partner_id'
    })

    Order.belongsTo(models.customers,{                    
      foreignKey: 'customer_id'
    })

    Order.belongsTo(models.customer_addresses,{                    
      foreignKey: 'customer_address_id'
    })
    
    Order.hasMany(models.order_items,{    
      foreignKey: 'order_id',as: 'items'
    })
    
    Order.belongsTo(models.order_statuses,{                    
        foreignKey: 'status_id',as:'status'
    })

    Order.belongsTo(models.distributors,{                    
        foreignKey: 'distributor_id'
    })
    
  }
  
  
  

  return Order
}