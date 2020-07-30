'use strict'


module.exports = (sequelize,DataTypes) => {
  let Product = sequelize.define('products',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    partner_id: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false,        
        unique: {
			args: true,
			msg: "Product name already taken"
		},
    },
    sort_description: {
        type:DataTypes.STRING
    },
    unit_price: {
        type:DataTypes.FLOAT,    
        allowNull:false,
    },
    is_aditional: {
        type:DataTypes.BOOLEAN,    
    },
    in_discount: {
        type:DataTypes.BOOLEAN,    
    },
    discount_percent: {
        type:DataTypes.INTEGER,    
    },
    price_with_discount: {
        type:DataTypes.INTEGER,    
    },
    category_id: {
        type:DataTypes.INTEGER
    },
    sub_category_id: {
        type:DataTypes.INTEGER,    
    },
    out_of_stock: {
        type:DataTypes.BOOLEAN,    
    },
    time_estimate: {
        type:DataTypes.INTEGER,    
    },
    pic: {
        type:DataTypes.STRING,    
    },
    tags: {
        type:DataTypes.STRING,    
    },
    friendly_url: {
        type:DataTypes.STRING,    
    }
  })

  Product.associate = (models) => {
    Product.hasMany(models.aditionals,{                    
      foreignKey: 'product_id',as:'aditionals'
    })
  }


  return Product
}