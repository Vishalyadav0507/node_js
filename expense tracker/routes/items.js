const express=require('express')

const router=express.Router()

const itemController=require('../controller/item')

router.post('/item/additem',itemController.getItem)

router.get('/additem',itemController.postItem)

router.delete('/item/deleteitem/:id',itemController.DeletePost)

module.exports=router