var form = document.getElementById('my-form')
form.addEventListener('submit',onsubmit);

function onsubmit(e){  
    e.preventDefault()
    var Name = document.getElementById('name').value;
    var email =document.getElementById('email').value;
    var phone =document.getElementById('phone').value;
    const obj={
        Name:Name,
        email:email,
        phone:phone,
    }
    axios.post('http://localhost:3000/user/add-user',obj)
    .then((response)=>{
        callingList(response.data.newUserDetail)
    })
    .catch(err=>
        {
            console.log(err)
        })
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:3000/user/add-user')
    .then((response)=>{
        for(var i=0;i<response.data.allUsers.length;i++){
            callingList(response.data.allUsers[i])
        }
    })
    .catch(err=>{console.log(err)})
})


function callingList(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li id=${user.id}> ${user.Name} ${user.Email} <button onclick= deleteUser('${user.id}')>delete User</button><button onclick= editUser('${user.email}','${user.Name}','${user.phone}')>edit</button> </li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}
function deleteUser(id){
   axios.delete(`http://localhost:3000/user/delete-user/${id}`)
    removeUserFromScreen(id)
}
function editUser(id,email,Name,phone){
    axios.put(`http://localhost:3000/user/edit-user/${id}`)
   document.getElementById('name').value=Name
   document.getElementById('email').value=email
   document.getElementById('phone').value=phone

}
function removeUserFromScreen(id){
    const parentNode=document.getElementById('show')
    const childNodeToDeleted=document.getElementById(id)
    parentNode.removeChild(childNodeToDeleted)
}






