const express=require('express')

const bodyParser=require('body-parser')



const app=express()
app.use(bodyParser.urlencoded({extended: false}));

app.use("/message",(req,res,next)=>{
    res.send('<form><input></input><button>send message</button></form>')
    console.log(req.body)
})

app.use('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/message" method="POST"><input type="text" id="username" name="username" placeholder="Enter Username"><button type="submit"> Send </button></form>'
    )
})

app.listen(4500)