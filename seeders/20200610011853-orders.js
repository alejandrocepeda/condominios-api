'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1, 
        customer_address_id:1,
        partner_id: 1,
        date_time: new Date(),
        payment_method_id: 1,
        total_amount: 1000,
        status_id: 1,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason: "",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time: new Date(),
        payment_method_id: 1,
        total_amount: 1000,
        status_id: 1,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time: new Date(),
        payment_method_id:1,
        total_amount: 1000,
        status_id: 1,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time: new Date(),
        payment_method_id: 1,
        total_amount: 1000,
        status_id: 1,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time:new Date(),
        payment_method_id:1,
        total_amount:1000,
        status_id: 1,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time:new Date(),
        payment_method_id:1,
        total_amount:1000,
        status_id: 3,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time:new Date(),
        payment_method_id:1,
        total_amount:1000,
        status_id: 3,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time:new Date(),
        payment_method_id:1,
        total_amount:1000,
        status_id: 2,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time:new Date(),
        payment_method_id:1,
        total_amount:1000,
        status_id: 2,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
      queryInterface.bulkInsert('orders', [{                
        customer_id: 1,            
        customer_address_id:1,
        partner_id: 1,
        date_time:new Date(),
        payment_method_id:1,
        total_amount:1000,
        status_id: 2,
        delivered_time: 30,            
        distributor_id: 1,
        decline_reason:"",
        ready_time: 10
      }], {}),
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
