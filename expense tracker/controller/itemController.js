const Item=require("../model/item")

const postItem= async(req,res,next)=>{
    try{
    // const id=req.body.id
    const Price=req.body.Price
    const Product=req.body.Item

    const data= await Item.create({price:Price,product:Product})
    res.status(201).json({newData:data})
    }
    catch(err){
        console.log(err)
    }
}

const getItem=async(req,res,next)=>{
    try{
    const alldata=await Item.findAll()
    res.status(200).json({allData:alldata})
    }catch(err){
        console.log(err)
    }
}

const DeletePost=async(req,res,next)=>{
    try{
    const ItemId=req.params.id
    await Item.destroy({where:{id:ItemId}})
    res.status(200)
    }
    catch(err){
        console.log(err)
    }
}

// const editPost =async(req,res,next)=>{

// }

module.exports={
    postItem:postItem,
    getItem:getItem,
    DeletePost:DeletePost,
    // editPost:editPost
}