var form = document.getElementById('my-form')
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    var Name = document.getElementById('name').value;
    var email =document.getElementById('email').value
    var phone =document.getElementById('phone').value;
    const obj={
        Name: Name,
        email:email,
        phone:phone
    }
    localStorage.setItem(Name,JSON.stringify(obj))
}