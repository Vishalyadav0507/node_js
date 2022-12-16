//getelementsbyTagName

var li =document.getElementsByTagName('li');
console.log(li)
console.log(li[1])
console.log(li[1].innerHTML)
li[1].textContent='hello 2';
li[2].style.backgroundColor='green';
for(var i=0; i<li.length;i++){
    li[i].style.fontWeight ='bold';
}
//getelementsbyclassname 
var li =document.getElementsByClassName('new-tag')
console.log(li)
console.log(li[1])
li[0].style.backgroundColor='yellow';
for(var i=0; i<li.length;i++){
    li[i].style.fontWeight ='bold';
}
