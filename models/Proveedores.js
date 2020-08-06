'use strict'

module.exports = (sequelize,DataTypes) => {
  let proveedores = sequelize.define('proveedores',{
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
  
  proveedores.associate = (models) => {
    
    proveedores.belongsTo(models.conjuntos,{                    
        foreignKey: 'conjunto_id'
    })
  }

  return proveedores
}