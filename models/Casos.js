'use strict'

module.exports = (sequelize,DataTypes) => {
  let casos = sequelize.define('casos',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    titulo: {
      type:DataTypes.STRING
    },
    descripcion: {
      type:DataTypes.STRING
    },
    fecha: {
      type:DataTypes.DATE
    },
    conjunto_id: {
      type:DataTypes.INTEGER
    }
  })
  
  
  return casos
}