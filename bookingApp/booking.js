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
function callingList(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li> ${user.Name} ${user.email}</li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}