'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('openings',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      week_day: {
        type:Sequelize.INTEGER
      },
      start_time: {
        type:Sequelize.TIME
      },
      end_time: {
        type:Sequelize.TIME
      },
      pause_start: {
        type:Sequelize.TIME
      },
      pause_end: {
        type:Sequelize.TIME
      },
      partner_id: {
        type:Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('openings');
  }
};
