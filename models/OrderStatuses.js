'use strict'

module.exports = (sequelize,DataTypes) => {
  let OrderStatuses = sequelize.define('order_statuses',{
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
  /*
  Order.associate = (models) => {
    Order.belongsTo(models.partners,{                    
        foreignKey: 'partner_id'
    })
  }
  */
  

  return OrderStatuses
}