var form = document.getElementById('form')
form.addEventListener('submit',addTable)

function addTable(e) {
    e.preventDefault();
    const obj = {
        'Price': document.getElementById('price').value,
        'dish': document.getElementById('dish').value,
        'table_no': document.getElementById('table').value,
    }
    axios
        .post('https://crudcrud.com/api/6d9fccf29bac4eddad4bbfa3020ec742/Table',obj)
        .then((response) => {
            showOnScreen(item.data)
        })
        .catch((err) => {console.log(err)})
    }


    window.addEventListener('DOMContentLoaded',()=>{
        axios.get('https://crudcrud.com/api/6d9fccf29bac4eddad4bbfa3020ec742/Table')
        .then((response)=>{
            for(var i=0; i<response.data.length; i++){
                showOnScreen(response.data[i])}
            })}
    )
function showOnScreen(item){
    const parentNode = document.getElementById(item.table_no)
    const childNode = `<li id="${item._id}" >${item.table_no}  ${item.Price} ${item.dish}<button onclick=deleteTable('${item._id},${item.table_no}')>delete</button></li>`
    parentNode.innerHTML = parentNode.innerHTML+childNode;
}

function deleteTable(tableID,tableNo){
    axios
        .delete(`https://crudcrud.com/api/6d9fccf29bac4eddad4bbfa3020ec742/${tableID}`)
        .then((response)=>{
            removeScreen(tableID,tableNo)
        })
}

function removeScreen(tableId,tableNo){
    const parentnode = document.getElementById(tableNo)
    const childNodeToDeleted = document.getElementById(tableId)
    parentnode.removeChild(childNodeToDeleted)

}