'use strict'

module.exports = (sequelize,DataTypes) => {
  let Category = sequelize.define('confirmation_codes',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      code: {
        type:DataTypes.STRING,
        allowNull:false
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      phone_number : {
        type: DataTypes.STRING,
        allowNull:false
      },
      date_time_expire: {        
        type:'TIMESTAMP'
      }
  })

  return Category
}