'use strict'

module.exports = (sequelize,DataTypes) => {
  let ubicacionapartamento = sequelize.define('ubicacionapartamentos',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    nombre: {
      type:DataTypes.STRING
    },
    reporte: {
      type:DataTypes.STRING
    },
    estado: {
      type:DataTypes.INTEGER
    }
  })
  
 

  return ubicacionapartamento
}