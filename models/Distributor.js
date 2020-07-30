'use strict'

module.exports = (sequelize,DataTypes) => {
  let Distributor = sequelize.define('distributors',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    first_name: {
        type:DataTypes.STRING
    },
    last_name: {
        type:DataTypes.STRING
    },    
    identification_number: {
        type:DataTypes.STRING
    },
    identification_type_id: {
        type:DataTypes.INTEGER
    },    
    phone_country_code: {
        type:DataTypes.STRING
    },
    phone_number: {
        type:DataTypes.STRING
    },
    city_id: {
        type:DataTypes.INTEGER
    },
    address: {
        type:DataTypes.STRING
    },
    street: {
        type:DataTypes.STRING
    },
    actived: {
        type:DataTypes.BOOLEAN
    },
    date_birth: {
        type:'TIMESTAMP'
    },
    pic: {
        type:DataTypes.STRING
    },
    location_coordinates: {
      type: DataTypes.STRING,
    }
  })
  
  
  

  return Distributor
}