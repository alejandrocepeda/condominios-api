'use strict'

module.exports = (sequelize,DataTypes) => {
    let OrderItemAditionals = sequelize.define('order_item_aditionals',{
        id: {
            type:DataTypes.INTEGER,    
            autoIncrement:true,
            primaryKey:true
        },
        order_item_id: {
            type:DataTypes.INTEGER,    
            allowNull:false
        },
        aditional_id: {
            type:DataTypes.INTEGER,    
            allowNull:false
        },      
        quantity: {
            type:DataTypes.INTEGER
        },      
        unit_price: {
            type:DataTypes.FLOAT
        }
    })

    OrderItemAditionals.associate = (models) => {
        OrderItemAditionals.belongsTo(models.aditionals,{                    
            foreignKey: 'aditional_id'
        })
    }


    return OrderItemAditionals
}