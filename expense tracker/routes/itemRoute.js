const express=require('express')

const router=express.Router()

const itemController=require('../controller/itemController')

router.post('/item/additem',itemController.postItem)

router.get('/additem',itemController.getItem)

router.delete('/item/deleteitem/:id',itemController.DeletePost)

module.exports=router