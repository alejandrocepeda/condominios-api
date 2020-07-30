'use strict'

module.exports = (sequelize,DataTypes) => {
    let OrderItems = sequelize.define('order_items',{
        id: {
            type:DataTypes.INTEGER,    
            autoIncrement:true,
            primaryKey:true
        },
        order_id: {
            type:DataTypes.INTEGER,    
            allowNull:false
        },
        product_id: {
            type:DataTypes.INTEGER,    
            allowNull:false
        },      
        quantity: {
            type:DataTypes.INTEGER
        },      
        unit_price: {
            type:DataTypes.FLOAT
        },      
        ready_time: {
            type:DataTypes.INTEGER
        },
        customer_instructions: {
            type:DataTypes.STRING,            
        }
    })
  
  
    OrderItems.associate = (models) => {
        OrderItems.belongsTo(models.products,{                    
            foreignKey: 'product_id'
        })

        OrderItems.hasMany(models.order_item_aditionals,{                    
            foreignKey: 'order_item_id',as:'aditionals'
        })
    }

    return OrderItems
}