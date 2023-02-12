const Sequelize=require('sequelize')

const sequelize=require("../path/database")

const User=sequelize.define("user",{
    id:{
        type:Sequelize.INTEGER,
        autoIncreament:true,
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    
    Phone:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        UNIQUE:true
    },

    Email:{
        type:Sequelize.STRING,
        UNIQUE:true,
        primaryKey:true
    }
})

module.exports=User