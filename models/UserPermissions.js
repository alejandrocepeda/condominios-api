'use strict'

module.exports = (sequelize,DataTypes) => {
  let UserPermissions = sequelize.define('user_permissions',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      user_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        required:true
      },
      permission_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        required:true
      }
  })

  UserPermissions.associate = (models) => {

    UserPermissions.belongsTo(models.permissions,{              
      foreignKey: 'permission_id'
    })
  };

  return UserPermissions
}