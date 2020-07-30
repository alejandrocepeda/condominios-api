'use strict'

module.exports = (sequelize,DataTypes) => {
  let Permission = sequelize.define('permissions',{
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

  return Permission
}