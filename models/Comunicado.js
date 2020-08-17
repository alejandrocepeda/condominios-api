'use strict'

module.exports = (sequelize,DataTypes) => {
  let comunicados = sequelize.define('comunicados',{
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
    fecha_desde: {
      type:DataTypes.DATE
    },
    fecha_hasta: {
      type:DataTypes.DATE
    },
    fecha_creacion: {
      type:DataTypes.DATE
    },
    conjunto_id: {
      type:DataTypes.INTEGER
    }
  })
  
 

  return comunicados
}