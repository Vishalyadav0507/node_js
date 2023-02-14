const express=require('express')

const router=express.Router()

const itemController=require('../controller/itemController')

router.post('/item/additem',itemController.postItem)

router.get('/additem',itemController.getItem)

router.delete('/item/deleteitem/:id',itemController.DeletePost)

// router.post('/item/editItem/:id',itemController.editPost)

module.exports=router