'use strict'

module.exports = (sequelize,DataTypes) => {
  let Roles = sequelize.define('roles',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    }
  })

  Roles.associate = (models) => {
    Roles.hasMany(models.role_permissions,{                    
        foreignKey: 'role_id'
    })
  }

  return Roles
}