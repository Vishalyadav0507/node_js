var obj={num:2}
var add=function(a,b,c){
    return this.num+a+b+c
}
console.log(add.call(obj,5,1,5))

// apply
var arr=[1,2,3]
console.log(add.apply(obj,arr))

//bind

var bound=add.bind(obj)
console.log(bound(1,2,3))

//student age

var obj={student:20}
var print=function(){
    return ("age of student is ",this.student)
}
console.log(print.call(obj))