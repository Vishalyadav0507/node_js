posts = [
    { title: "post one", body: "this is post one", createAt: new Date().getTime() },
    { title: "post two", body: "this is post two", createAt: new Date().getTime() }
]
intervalID = 0
function getpost() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title} last update in ${(new Date().getTime() - post.createAt) / 1000} second ago</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}
function createpost(post) {
    setTimeout(() => { })
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = false
            if (!err) {
                posts.push(post)
                resolve()
            } else {
                reject()
            }
        }, 1000)

    })
}
function del() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length >= 0) {
                posts.pop()
                resolve("post added succesfully")
            } else {
                reject("errpr: array is empty")
            }
        }, 5000)
    })
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve((new Date().getTime())/1000)
            reject("err: error ")
        },1000)   
    })
}
Promise.all([createpost({ title: "post three", body: "this is post two", createAt: new Date().getTime() }), updateLastUserActivityTime()]).then(([a,b])=>{
    getpost()
    console.log("updateLastUserActivityTime is",b)
})
Promise.all([createpost({ title: "post four", body: "this is post four", createAt: new Date().getTime() }), updateLastUserActivityTime()]).then(([a,b])=>{
    getpost()
    console.log("updateLastUserActivityTime is",b,"second")
})
Promise.all([del(),updateLastUserActivityTime()]).then(([a,b])=>{
    getpost()
    console.log(b)
})