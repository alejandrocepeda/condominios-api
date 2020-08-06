'use strict'

module.exports = (sequelize,DataTypes) => {
  let correspondencias = sequelize.define('correspondencias',{
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
      residente_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      }
  })
  
  correspondencias.associate = (models) => {
    
    correspondencias.belongsTo(models.residentes,{                    
        foreignKey: 'residente_id'
    })

    correspondencias.belongsTo(models.conjuntos,{                    
      foreignKey: 'conjunto_id'
    })

  }
  
  

  return correspondencias
}