'use strict'

module.exports = (sequelize,DataTypes) => {
  let OrderStatuses = sequelize.define('partner_statuses',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING,    
        allowNull:false
    },
    description: {
        type:DataTypes.STRING
    }
  })

  return OrderStatuses
}