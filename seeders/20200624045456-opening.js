'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('openings', [{                        
        week_day: 1,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
      }], {}),
      queryInterface.bulkInsert('openings', [{                
        week_day: 2,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
      }], {}),
      queryInterface.bulkInsert('openings', [{                
        week_day: 3,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
      }], {}),
      queryInterface.bulkInsert('openings', [{                
        week_day: 4,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
      }], {}),
      queryInterface.bulkInsert('openings', [{                
        week_day: 5,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
      }], {}),
      queryInterface.bulkInsert('openings', [{                
        week_day: 6,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
      }], {}),
      queryInterface.bulkInsert('openings', [{                
        week_day: 0,
        start_time:'08:00:00',
        end_time:'20:00:00',
        pause_start: null,
        pause_end: null,
        partner_id: 1
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
