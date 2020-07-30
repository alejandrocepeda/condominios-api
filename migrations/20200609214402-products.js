'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    return queryInterface.createTable('products',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      partner_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      sort_description: {
        type:Sequelize.STRING
      },
      unit_price: {
        type:Sequelize.FLOAT,    
      },
      is_aditional: {
        type:Sequelize.BOOLEAN,    
      },
      in_discount: {
        type:Sequelize.BOOLEAN,    
      },
      discount_percent: {
        type:Sequelize.INTEGER,    
      },
      price_with_discount: {
        type:Sequelize.INTEGER,    
      },
      category_id: {
        type:Sequelize.INTEGER,    
      },
      sub_category_id: {
        type:Sequelize.INTEGER,    
      },
      out_of_stock: {
        type:Sequelize.BOOLEAN,    
      },
      time_estimate: {
        type:Sequelize.INTEGER,    
      },
      pic: {
        type:Sequelize.STRING,    
      },
      tags: {
        type:Sequelize.STRING,    
      },
      friendly_url: {
        type:Sequelize.STRING,    
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
