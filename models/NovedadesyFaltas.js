'use strict'

module.exports = (sequelize,DataTypes) => {
  let novedadesyfaltas = sequelize.define('novedadesyfaltas',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    propietario_id: {
      type:DataTypes.INTEGER
    },
    reporte: {
      type:DataTypes.STRING
    },
    fecha_hora: {
      type:'TIMESTAMP',
      allowNull:false
    },
    conjunto_id: {
      type:DataTypes.INTEGER
    }
  })
  

  return novedadesyfaltas
}