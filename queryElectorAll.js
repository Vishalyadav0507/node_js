var item=document.querySelectorAll('li');
item[1].style.color='green';
var odd =document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length; i++){
    odd[i].style.backgroundColor ='green';
}
