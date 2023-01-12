const posts=[
    {title:'one post',body : 'this is one post',createAt :new Date().getTime()},
    {title: 'post two',body : 'this is post two',createAt :new Date().getTime()}
]
let intervalID=0;
function getpost(){
    clearInterval(intervalID)
    intervalID=setInterval(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} create at ${((new Date().getTime())-post.createAt)/1000} second</li>`
        })
        console.log(intervalID)
        document.body.innerHTML=output;
    },1000)
}
function createpost(post,callback){
    setTimeout(() => {
        posts.push({...post,createAt:new Date().getTime()})
        callback()
    }, 2000);
}
createpost({title :'post three',body: 'this is thrid post'},getpost)

function  create4thPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createAt:new Date().getTime()})
        callback()
    }, 6000);
}
create4thPost({title :'post fourth',body: 'this is fourth post'},getpost)