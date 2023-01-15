var form=document.getElementById('my-form')
form.addEventListener('submit',addpost)


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
        .post('https://crudcrud.com/api/9a77202def5a46d5b4057feb3a25d645/StudentData',obj)
    .then((response)=>{console.log(response)})
}

