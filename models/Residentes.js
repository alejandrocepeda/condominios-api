'use strict'

module.exports = (sequelize,DataTypes) => {
  let residentes = sequelize.define('residentes',{
    id: {
        type: DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
  })
  

  return residentes
}