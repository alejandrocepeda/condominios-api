'use strict'

module.exports = (sequelize,DataTypes) => {
  let OrderStatuses = sequelize.define('reasons_decline_orders',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.INTEGER,    
        allowNull:false
    }
  })

  return OrderStatuses
}