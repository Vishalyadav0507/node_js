const posts = [
    { title: 'post one', body: 'this is one post', createAt: new Date().getTime() },
    { title: 'post two', body: 'this is two post', createAt: new Date().getTime() },
]
intervalID = 0;
function getpost() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}
function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false
            if (!error) {
                resolve()
            }
            else {
                reject("error : Something went wrong")
            }

        }, 2000)
    })
}
function del() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop()
                resolve()
            } else {
                reject("error: array is empty");
            }
        }, 1000);
    })
}
getpost()
createpost({ title: 'post third', body: 'this is post third' })
    .then(() => {
        getpost()
        del().then(() => {
            getpost()
            del().then(() => {
                getpost()
                del().then(() => {
                    getpost()
                    del().then(() => {
                        getpost()
                        del().then(()=>{
                            getpost()
                        }).catch((err) => {
                            console.log(err)
                    })
                    })
                })
            })
        })
    })
createpost({ title: 'post 4', body: 'this is post 4th' })
