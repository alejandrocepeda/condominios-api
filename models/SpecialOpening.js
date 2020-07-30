'use strict'

module.exports = (sequelize,DataTypes) => {
    let SpecialOpening = sequelize.define('special_openings',{
        id: {
            type:DataTypes.INTEGER,    
            autoIncrement:true,
            primaryKey:true
        },
        date: {
            type:'TIMESTAMP'
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

  return SpecialOpening
}