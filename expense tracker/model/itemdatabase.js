const Sequelize=require('sequelize')

const sequelize=require('../util/path')

const Item=sequelize.define('item',{
    id:{
        type:Sequelize.INTEGER,
        autoIncreament:true,
        UNIQUE:true,
        primaryKey:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    product:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=Item
