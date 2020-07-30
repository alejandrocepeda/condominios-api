'use strict'

module.exports = (sequelize,DataTypes) => {
  let ProductAditionals = sequelize.define('aditionals',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      unit_price : {
        type: DataTypes.FLOAT
      }
  })

  return ProductAditionals
}