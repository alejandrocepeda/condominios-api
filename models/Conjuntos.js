'use strict'

module.exports = (sequelize,DataTypes) => {
  let conjuntos = sequelize.define('conjuntos',{
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
  

  return conjuntos
}