'use strict'

module.exports = (sequelize,DataTypes) => {
    let Category = sequelize.define('openings',{
        id: {
            type:DataTypes.INTEGER,    
            autoIncrement:true,
            primaryKey:true
        },
        week_day: {
            type:DataTypes.INTEGER
        },
        start_time: {
            type:DataTypes.TIME
        },
        end_time: {
            type:DataTypes.TIME
        },
        pause_start: {
            type:DataTypes.TIME
        },
        pause_end: {
            type:DataTypes.TIME
        },
        partner_id: {
            type:DataTypes.INTEGER
        }
    })

  return Category
}