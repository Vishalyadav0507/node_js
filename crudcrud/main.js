var form=document.getElementById('my-form')
form.addEventListener('submit',addpost)

function addpost(e){
    e.preventDefault();

    const obj={
        'Name':document.getElementById('name').value,
        'Email':document.getElementById('email').value,
        'phone':document.getElementById('phone').value 
    }
    axios
        .post('https://crudcrud.com/api/6e4dc0a2bb9643efb0dfe2b19725ed0f/StudentData',obj)
    .then((response)=>{ showOnScreen(response.data)})

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/6e4dc0a2bb9643efb0dfe2b19725ed0f/StudentData')
    .then((response)=>{console.log(response)
        for (var i=0; i<response.data.length;i++){
            showOnScreen(response.data[i])
        }
    })
})

function showOnScreen(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li id=${user._id} > ${user.Name} ${user.Email} <button class ='primary' onclick=updateDetails('${user._id}','${user.Name}','${user.Email}','${user.phone}')>edit</button> <button class="danger" onclick=deletePost('${user._id}') >delete</button></li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}

function deletePost(userID){
    axios
    .delete(`https://crudcrud.com/api/6e4dc0a2bb9643efb0dfe2b19725ed0f/StudentData/${userID}`)
.then(removeScreen(userID))}

function removeScreen(userId){
    const parentnode=document.getElementById('show')
    const childNodeToDeleted=document.getElementById(userId)
    parentnode.removeChild(childNodeToDeleted)
}

function updateDetails(userID,Name,Email,phone){
    document.getElementById('name').value=Name
    document.getElementById('email').value=Email
    document.getElementById('phone').value=phone
    removeScreen(userID)
    axios
    .put(`https://crudcrud.com/api/6e4dc0a2bb9643efb0dfe2b19725ed0f/StudentData/${userID}`,{
        Name: document.getElementById('name').value,
        Email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
})
}