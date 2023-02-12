const User=require('../model/userdataBase')

const postUser = async(req,res,next)=>{
    try{
     if(!req.body.phone){
         throw new Error('phone number is mendetory')
     }
     const name=req.body.Name
     const phone=req.body.phone
     const email=req.body.email
     
     const data=await(User.create({Name:name,Phone:phone,Email:email}))
     res.status(201).json({newUserDetail:data})
    }catch(err){
     res.status(505).json({error:err})
    }
 }

 const getUser=async(req,res,next)=>{
    try{
    const user=await User.findAll()
    res.status(200).json({allUsers:user})
    }
    catch(err){
        res.status(504).json({error:err})
    }
}

const deleteUser=async(req,res,next)=>{
    const UserID=req.params.id
    await User.destroy({where:{id:UserID}})
    res.status(200)
 }

 const editUser=async(req,res,next)=>{
    const userID=req.params.id
    const Name=req.body.Name
    const phone=req.body.phone
    const email=req.body.email
    await User.update({Name:Name,Phone:phone,Email:email},{where:{id:userID}})
    res.status(200)
 }

 module.exports={
    postUser:postUser,
    deleteUser:deleteUser,
    getUser:getUser,
    updateUser:editUser
 }