var form = document.getElementById('form')
form.addEventListener("submit", postdetails)
let price=0;
function postdetails(e) {
    e.preventDefault();
    const obj = {
        'Price': document.getElementById('price').value,
        'Item': document.getElementById('item').value
    }
    axios
        .post('https://crudcrud.com/api/f3c96ef67b8f4f25bd587d5a87eef4c4/Details', obj)
        .then((response) => {
            showOnScreen(response.data)
            calculate(response.data.Price)
        })
}

window.addEventListener("DOMContentLoaded",() => {
    
    axios.get('https://crudcrud.com/api/f3c96ef67b8f4f25bd587d5a87eef4c4/Details')
    .then((response) => {
            for (var i = 0; i < response.data.length; i++){
                showOnScreen(response.data[i])
                calculate(response.data[i].Price)
            }
        })
})

function showOnScreen(item) {
    const perentNode = document.getElementById('itemDetails')
    const childHTML = `<li id='${item._id}'> price: ${item.Price} Item Name : ${item.Item} <button onclick=deletePost('${item._id}',${item.Price})>delete</button></li>`
    perentNode.innerHTML = perentNode.innerHTML + childHTML;
}

function deletePost(itemID,Price) {
    axios
        .delete(`https://crudcrud.com/api/f3c96ef67b8f4f25bd587d5a87eef4c4/Details/${itemID}`)
        .then((response)=>{
            removeScreen(itemID)
            calculateSub(Price)
        })
}

function removeScreen(itemID){
    const parentnode = document.getElementById('itemDetails')
    const childNodeToDeleted = document.getElementById(itemID)
    parentnode.removeChild(childNodeToDeleted)
}
function calculate(Price){
    const parent=document.getElementById('itemPrice')
    price=Number(Price)+Number(price)
    const childHTML= `<h4> total price is :${price}</h4>`
    parent.innerHTML=childHTML
}
function calculateSub(Price){
    const parent=document.getElementById('itemPrice')
    price=Number(price)-Number(Price)
    const childHTML= `<h4> total price is :${price}</h4>`
    parent.innerHTML=childHTML
}
