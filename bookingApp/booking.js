var form = document.getElementById('my-form')
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    var Name = document.getElementById('name').value;
    var email =document.getElementById('email').value
    localStorage.setItem('name',Name)
    localStorage.setItem('email',email)

}