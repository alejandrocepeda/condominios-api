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
    nit: {
        type:DataTypes.STRING
    },
    direccion: {
        type:DataTypes.STRING
    },
    licitaciones: {
        type:DataTypes.BOOLEAN
    },
    referido: {
        type:DataTypes.STRING
    },
    telefono: {
        type:DataTypes.STRING
    },
    celular: {
        type:DataTypes.STRING
    },
    correo: {
        type:DataTypes.STRING
    },
    sitio_web: {
        type:DataTypes.STRING
    },
    categoria: {
        type:DataTypes.BOOLEAN
    },
    cantidad: {
        type:DataTypes.INTEGER
    },
    conjunto_id: {
        type:DataTypes.INTEGER
    }
  })
  
  proveedores.associate = (models) => {
    
    proveedores.belongsTo(models.conjuntos,{                    
        foreignKey: 'conjunto_id'
    })
  }

  return proveedores
}