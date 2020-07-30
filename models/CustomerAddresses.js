'use strict'

module.exports = (sequelize,DataTypes) => {
  let OrderStatuses = sequelize.define('customer_addresses',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    customer_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
    },
    city_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
    },
    address: {
        type:DataTypes.STRING
    },
    street: {
        type:DataTypes.STRING
    },
    location_coordinates: {
      type: DataTypes.STRING,
    },
  })
  
  

  return OrderStatuses
}