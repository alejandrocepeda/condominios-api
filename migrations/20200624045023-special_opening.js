'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('special_openings',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      date: {
        type:'TIMESTAMP',
        allowNull:false
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
    return queryInterface.dropTable('special_openings');
  }
};
