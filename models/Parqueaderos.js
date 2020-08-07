'use strict'

module.exports = (sequelize,DataTypes) => {
  let parqueaderos = sequelize.define('parqueaderos',{
      id: {
        type: DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      conjunto_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      apartamento_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      tipo_parqueadero: {
        type: DataTypes.INTEGER,
        allowNull:false
      }
  })
  

  parqueaderos.associate = (models) => {
    
    parqueaderos.belongsTo(models.apartamentos,{                    
        foreignKey: 'apartamento_id'
    })

    parqueaderos.belongsTo(models.conjuntos,{                    
      foreignKey: 'conjunto_id'
    })

  }

  return parqueaderos
}