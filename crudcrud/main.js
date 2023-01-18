var form=document.getElementById('my-form')
form.addEventListener('submit',addpost)
// form.addEventListener('onclick',deletePost)


function addpost(e){
    e.preventDefault();

    var name= document.getElementById('name').value
    var email= document.getElementById('email').value
    var number= document.getElementById('phone').value   
    const obj={
        'Name':name,
        'Email':email,
        'phone':number
    }
    axios
        .post('https://crudcrud.com/api/bba49e273213476fa003d041b6bc9621/StudentData',obj)
    .then((response)=>{ showOnScreen(response.data)})

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/bba49e273213476fa003d041b6bc9621/StudentData')
    .then((response)=>{console.log(response)
        for (var i=0; i<response.data.length;i++){
            showOnScreen(response.data[i])
        }
    })
})

function showOnScreen(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li id=${user._id} > ${user.Name} ${user.Email} <button class="danger" onclick=deletePost('${user._id}') >delete</button></li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}

function deletePost(userID){
    axios
    .delete(`https://crudcrud.com/api/bba49e273213476fa003d041b6bc9621/StudentData/${userID}`)
.then(removeScreen(userID))}

function removeScreen(userId){
    const parentnode=document.getElementById('show')
    const childNodeToDeleted=document.getElementById(userId)
    parentnode.removeChild(childNodeToDeleted)
}

