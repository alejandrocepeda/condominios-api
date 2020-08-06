'use strict'

module.exports = (sequelize,DataTypes) => {
  let parqueaderos = sequelize.define('parqueaderos',{
    id: {
        type: DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      conjunto_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      residente_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      }
  })
  

  parqueaderos.associate = (models) => {
    
    parqueaderos.belongsTo(models.residentes,{                    
        foreignKey: 'residente_id'
    })

    parqueaderos.belongsTo(models.conjuntos,{                    
      foreignKey: 'conjunto_id'
    })

  }

  return parqueaderos
}