const Sequelize=require('sequelize')

const sequelize=require('../util/itemPath')

const Item=sequelize.define('item',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
