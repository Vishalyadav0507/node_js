var form = document.getElementById('form')
form.addEventListener('submit', postdetails)

function postdetails(e) {
    console.log('clicked')
    try {
        // var id = 0
        e.preventDefault();
        const obj = {
            // 'id':id+1,
            'Price': document.getElementById('price').value,
            'Item': document.getElementById('item').value
        }
        
        axios
            .post('http://localhost:3000/item/additem', obj)
            .then((response) => {
                
                showOnScreen(response.data.newData)
                calculate(response.data.newData.price)
            })
            .catch(err => {
                console.log(err)
            })
    } catch (err) {
        console.log(err)
    }
}
var price = 0;
window.addEventListener("DOMContentLoaded", () => {
    try {
        axios
            .get('http://localhost:3000/additem')
            .then((response) => {
                for (var i = 0; i < response.data.allData.length; i++) {
                    showOnScreen(response.data.allData[i])
                    calculate(response.data.allData[i].price)
                }
            })
    }
    catch (err) {
        console.log(err)
    }
})

function showOnScreen(item) {
    const perentNode = document.getElementById('itemDetails')
    const childHTML = `<li class="container" style="background-color: azure;padding:5px " id='${item.id}'> price: ${item.price} Item Name : ${item.product} <button class="btn btn-danger" onclick=deletePost('${item.id}','${item.price}')>delete</button></li>`
    perentNode.innerHTML = perentNode.innerHTML + childHTML;
}

function deletePost(itemID, Price) {
    try {
        axios
            .delete(`http://localhost:3000/item/deleteitem/${itemID}`)
            .then(
                removeScreen(itemID), calculateSub(Price)
            )
            .catch(err => {
                console.log(err)
            })
    } catch (err) {
        console.log(err)
    }
}

function removeScreen(itemID) {
    const parentnode = document.getElementById('itemDetails')
    const childNodeToDeleted = document.getElementById(itemID)
    parentnode.removeChild(childNodeToDeleted)
}
function calculate(Price) {
    const parent = document.getElementById('itemPrice')
    price = Number(Price) + Number(price)
    const childHTML = `<h4> total price is :${price}</h4>`
    parent.innerHTML = childHTML
}
function calculateSub(Price) {
    const parent = document.getElementById('itemPrice')
    price = Number(price) - Number(Price)
    const childHTML = `<h4> total price is :${price}</h4>`
    parent.innerHTML = childHTML
}

// function edit(id,price,product){
//     document.getElementById('price').value=price
//     document.getElementById('item').value=product
//     removeScreen(id)
//     calculateSub(price)

//    axios.put(`http://localhost:3000/item/editItem/${id}`)
//     .then()
    
// }