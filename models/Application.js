'use strict'

module.exports = (sequelize,DataTypes) => {
  let OrderStatuses = sequelize.define('applications',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING,    
        allowNull:false
    }
  })

  return OrderStatuses
}