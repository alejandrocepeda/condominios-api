'use strict'

module.exports = (sequelize,DataTypes) => {
  let RolePermissions = sequelize.define('role_permissions',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    role_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      required:true
    },
    permission_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      required:true
    }
  })

  RolePermissions.associate = (models) => {
    RolePermissions.belongsTo(models.permissions,{                    
        foreignKey: 'permission_id'
    })
  };

  return RolePermissions
}