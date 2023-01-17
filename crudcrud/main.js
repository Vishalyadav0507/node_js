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
        .post('https://crudcrud.com/api/6ec7e0a833294cdfab1f5c1dda39b933/StudentData',obj)
    .then((response)=>{ showOnScreen(response.data)})

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/6ec7e0a833294cdfab1f5c1dda39b933/StudentData')
    .then((response)=>{console.log(response)
        for (var i=0; i<response.data.length;i++){
            showOnScreen(response.data[i])
        }
    })
})

function showOnScreen(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li> ${user.Name} ${user.Email} </li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}