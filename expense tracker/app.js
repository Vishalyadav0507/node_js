const express=require('express')
const path= require('path')
const bodyParser=require('body-parser')
var cors=require('cors');

const sequelize=require('./util/path')
const  itemRoute=require('./routes/items')

const Item=require('./model/itemdatabase')

const app=express()
app.use(cors())

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(itemRoute)


sequelize.sync()
.then(result=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})