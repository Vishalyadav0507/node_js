var form = document.getElementById('form')
form.addEventListener("submit", postdetails)

function postdetails(e) {
    e.preventDefault();
    const obj = {
        'Price': document.getElementById('price').value,
        'Item': document.getElementById('item').value
    }
    axios
        .post('https://crudcrud.com/api/9e216cf4077a4ddc849e114e1f8f8094/Details', obj)
        .then((response) => {
            showOnScreen(response.data)
        })
}
window.addEventListener("DOMContentLoaded",() => {
    
    axios.get('https://crudcrud.com/api/9e216cf4077a4ddc849e114e1f8f8094/Details')
    .then((response) => {
        var price=0
            for (var i = 0; i < response.data.length; i++){
                showOnScreen(response.data[i])
                parent=document.getElementById('itemPrice')
                price=Number(response.data.Price)+price
                const childHTML= `<h4> total ${price}</h4>`
                parent.innerHTML=childHTML
            }
        })
})

function showOnScreen(item) {
    const perentNode = document.getElementById('itemDetails')
    const childHTML = `<li id='${item._id}'> ${item.Price} ${item.Item} <button onclick=deletePost('${item._id}')>delete</button></li>`
    perentNode.innerHTML = perentNode.innerHTML + childHTML;
}

function deletePost(itemID) {
    axios
        .delete(`https://crudcrud.com/api/9e216cf4077a4ddc849e114e1f8f8094/Details/${itemID}`)
        .then((response)=>{
            removeScreen(itemID)
        })
}

function removeScreen(itemID){
    const parentnode = document.getElementById('itemDetails')
    const childNodeToDeleted = document.getElementById(itemID)
    parentnode.removeChild(childNodeToDeleted)
}

    