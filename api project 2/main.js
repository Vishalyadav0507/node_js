var form = document.getElementById('form')
form.addEventListener('submit', addTable)

async function addTable(event) {
    try{
    event.preventDefault()
    const obj = {
        'Dish': document.getElementById('dish').value,
        'Price': document.getElementById('price').value,
        'tableNo': document.getElementById('table').value,
    }
    let response = await axios
        .post('https://crudcrud.com/api/4eeaadb2644049c487035c6ba3dd37d0/Table', obj)

    showOnScreen(response.data)
    }
    catch{err=>{console.log(err)}}
}
window.addEventListener("DOMContentLoaded", async () =>{
    
    let response = await axios.get('https://crudcrud.com/api/4eeaadb2644049c487035c6ba3dd37d0/Table')
    if (response){
        response.data.forEach(data => {
            showOnScreen(data)
        })
    }
    
})

function showOnScreen(Details) {
    try{
    const parentNode = document.getElementById(Details.tableNo)
    const childNode = `<li id=${Details._id}>Dish name is :- ${Details.Dish} and price is :- ₹${Details.Price} <button class="btn btn-danger" onclick=deleteTable('${Details._id}','${Details.tableNo}')>delete</button></li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode
    // parentNode.appendChild(childNode)
    }catch{err=>{console.log(err)}}
}

function deleteTable(tableId, Tableno){
    try{
    axios.delete(`https://crudcrud.com/api/4eeaadb2644049c487035c6ba3dd37d0/Table/${tableId}`)
    .then(
            deleteOnScreen(tableId,Tableno)
    )
    }
    catch{err=>{console.log(err)}}

}

function deleteOnScreen(tableId,tableNo) {
    try{
    const parent = document.getElementById(tableNo)
    const child = document.getElementById(tableId)
    parent.removeChild(child)
}
    catch{err=>{console.log(err)}
}
}
