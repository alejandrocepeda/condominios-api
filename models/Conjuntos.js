'use strict'

module.exports = (sequelize,DataTypes) => {
  let conjuntos = sequelize.define('conjuntos',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    direccion: {
      type:DataTypes.STRING
    },
    nit: {
      type:DataTypes.STRING
    },
    tipo_conjunto_id: {
      type:DataTypes.INTEGER
    },
    ciudad_id: {
      type:DataTypes.INTEGER
    },
    pais_id: {
      type:DataTypes.INTEGER
    },
    moneda: {
      type:DataTypes.STRING
    },
    logo: {
      type:DataTypes.STRING
    },
    pago_electronico: {
      type:DataTypes.BOOLEAN
    }
  }


)
  

  return conjuntos
}