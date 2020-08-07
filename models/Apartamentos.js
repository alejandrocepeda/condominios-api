'use strict'

module.exports = (sequelize,DataTypes) => {
  let apartamentos = sequelize.define('apartamentos',{
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
    }
  })
  
  apartamentos.associate = (models) => {
    
    apartamentos.belongsTo(models.conjuntos,{                    
        foreignKey: 'conjunto_id'
    })
  }

  return apartamentos
}