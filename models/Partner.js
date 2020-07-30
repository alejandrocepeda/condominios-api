'use strict'


module.exports = (sequelize,DataTypes) => {
  let Partner = sequelize.define('partners',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: {
        args: true,
        msg: "Product name already taken"
      },
    },    
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:true
    },
    address: {
      type: DataTypes.STRING,
    },
    location_coordinates: {
      type: DataTypes.STRING,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
    pic: {
      type: DataTypes.STRING,
    },
    friendly_url: {
      type: DataTypes.STRING,    
    }
  })

  Partner.associate = (models) => {
    
    Partner.belongsTo(models.partner_statuses,{                    
        foreignKey: 'status_id',as:'status'
    })

    Partner.hasMany(models.openings,{                    
      foreignKey: 'partner_id',as:'openings'
    })

    Partner.hasMany(models.special_openings,{                    
      foreignKey: 'partner_id',as:'special_openings'
    })
    
  }

  return Partner
}