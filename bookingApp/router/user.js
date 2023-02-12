const express=require('express');
const router=express.Router()
const userController=require('../controller/user')

router.post('/user/add-user',userController.postUser)
 
 router.get('/user/add-user',userController.getUser)

 router.delete('/user/delete-user/:id',userController.deleteUser)

 router.put('/user/edit-user/:id',userController.updateUser)

 module.exports=router