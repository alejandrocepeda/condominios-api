'use strict'

module.exports = (sequelize,DataTypes) => {
  let proveedores = sequelize.define('visitantes',{
    id: {
        type: DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING
    },
    cedula: {
        type:DataTypes.STRING
    },
    apartamento_id: {
        type:DataTypes.INTEGER
    },
    autorizacion: {
        type:DataTypes.STRING
    },      
    place: {
        type:DataTypes.STRING
    },      
    puesto: {
        type:DataTypes.STRING
    }
  })
  
  proveedores.associate = (models) => {
    
    proveedores.belongsTo(models.apartamentos,{                    
        foreignKey: 'apartamento_id'
    })
  }

  return proveedores
}