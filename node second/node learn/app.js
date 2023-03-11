// let str="how are you ?"

// let split=str.split(" ")
// let reverse=split.reverse()
// let join = reverse.join(" ")

// console.log(join)

// let reverse= str.split(" ").reverse().join(' ')
// console.log(reverse)

// var newstr=""
// for(i=str.length-1;i>=0;i--){
//     newstr+=str[i]
// }
// console.log(newstr)

// let newStrReverse=newstr.split(' ').reverse().join(" ")
// console.log(newStrReverse)

// let arr=[
//     {name:"vishal",amount:100},
//     {name:"ashu",amount:150},
//     {name:"shailesh",amount:50},
//     {name:"beena",amount:190},
// ]
// for(var i=0;i<arr.length;i++){
//     for( var j=0;j<arr.length-1;j++){
//         if(arr[j+1].amount>arr[j].amount){
//             var temp=arr[j+1]
//             arr[j+1]=arr[j]
//             arr[j]=temp
//         }
//     }
// }

// console.log(arr)

// let arr=[
//     {id:1},
//     {id:2}
// ]

// for(var i=0;i<arr.length;i++){
//     if (arr[i].id===1){
//         arr.slice(i,1)
//     }
// }
// console.log(arr)

                    //*********palindrome string***********
// isPalindrome(s){
//     let flag=true
//     for(var i=0;i<s.length;i++){
//         if(s[i]==s[s.length-1-i]){
//             flag=true
//         }else{
//             flag=false
//             break
//         }
//     }
//     if(flag){
//         return 1
//     }else{
//         return 0
//     }
    
// }
                         //***** count dupicate caracter***
// let s='geeksforgeeks'
// let obj={}
// for(var i=0;i<s.length;i++){
//     if(obj[s[i]]){
//         obj[s[i]]+=1
//     }else{
//         obj[s[i]]=1
//     }
// }
// for(keys in obj){
//     if(obj[keys]>1){
//         console.log(keys,obj[keys])
//     }
// }
                    
                    
                //    ******S1 is rotational on s2 or not**********
    // let s1 = "abcd";
// let s2 = "cdab";
 
// if(s1.length!=s2.length){
//     console.log("s2 in not a rotation on s1")
// }else{
//     let index=[]
//     let firstCharS1=s1[0]
//     for(var i=0;i<s1.length;i++){

//         if(s2[i]==firstCharS1){
//             index.push(i)
//         }
//     }

//     let isRotation=false

//     for(var j=0;j<s1.length;j++){
//         if(s1[j]!=s2[index[0] % s1.length]){
//             isRotation=false
//         }else{
//             isRotation=true
//             break
//         }
//     }
//     if(isRotation){
//         console.log("its Rotation")
//     }else{
//         console.log("its not rotational")
//     }
// }


