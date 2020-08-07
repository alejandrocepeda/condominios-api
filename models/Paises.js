'use strict'

module.exports = (sequelize,DataTypes) => {
  let ProductAditionals = sequelize.define('paises',{
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

  return ProductAditionals
}