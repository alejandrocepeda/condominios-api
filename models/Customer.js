'use strict'

module.exports = (sequelize,DataTypes) => {
  let Customer = sequelize.define('customers',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    first_name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name: {
        type:DataTypes.STRING,  
        allowNull:false
    },          
    identification_number: {
        type:DataTypes.STRING,     
        allowNull:false
    },      
    identification_type_id: {
        type:DataTypes.INTEGER,    
        allowNull:false
    },          
    phone_country_code: {
        type:DataTypes.STRING,          
    },
    phone_number: {
        type:DataTypes.STRING,   
    },
    address_id: {
        type:DataTypes.INTEGER,     
    },
    country_id: {
        type:DataTypes.INTEGER,
    },      
    date_birth: {
        type:'TIMESTAMP'
    },
    actived: {
        type:DataTypes.BOOLEAN,               
    },
    gender: {
        type:DataTypes.STRING,          
    },
    social_provider: {
        type:DataTypes.STRING,   
    },
    confirmation_code: {
        type:DataTypes.STRING,   
    },
    pic: {
        type:DataTypes.STRING,   
    },
    vip: {
        type:DataTypes.BOOLEAN,   
    }   
  })
  
  
  Customer.associate = (models) => {
    

    Customer.belongsTo(models.customer_addresses,{                    
        foreignKey: 'address_id',as:'addresses'
    })
  }
  
  

  return Customer
}