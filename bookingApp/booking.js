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
    localStorage.setItem(email,JSON.stringify(obj))
    callingList(obj)
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        callingList(userDetailsObj)
    }
})

function callingList(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li id=${user.email}> ${user.Name} ${user.email} <button onclick= deleteUser('${user.email}')>delete User</button><button onclick= editUser('${user.email}','${user.Name}','${user.phone}')>edit</button> </li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}
function deleteUser(email){
    localStorage.removeItem(email)
    removeUserFromScreen(email)
}
function editUser(email,Name,phone){
   document.getElementById('name').value=Name
   document.getElementById('email').value=email
   document.getElementById('phone').value=phone

   deleteUser(email)
}
function removeUserFromScreen(email){
    const parentNode=document.getElementById('show')
    const childNodeToDeleted=document.getElementById(email)
    parentNode.removeChild(childNodeToDeleted)
}
