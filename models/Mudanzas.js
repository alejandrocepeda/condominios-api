'use strict'

module.exports = (sequelize,DataTypes) => {
  let mudanzas = sequelize.define('mudanzas',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    apartamento_id: {
      type:DataTypes.INTEGER
    },
    placa_vehiculo: {
      type:DataTypes.STRING
    },
    desde: {
      type:'TIMESTAMP',
      allowNull:false
    },
    hasta: {
      type:'TIMESTAMP',
      allowNull:false
    },
    conjunto_id: {
      type:DataTypes.INTEGER
    }
  })
  

  return mudanzas
}