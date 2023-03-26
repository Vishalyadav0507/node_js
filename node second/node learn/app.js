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

// let arr1="abc"
// let arr=arr1.split("")
// let start=0
// let end=arr.length-1
// while(start<end){
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr.join(""))

// let arr = [ ["you", "we",""],
//         ["have", "are",""],
//         ["sleep", "eat", "drink"]]
//         const R = 3
//         const C = 3
//         let output = new Array(R).fill("")

//         for(let i = 0; i < C; i++){
//             if(arr[0][i] != "")
//             printUtil(arr, 0, i, output)
//         }

//     function printUtil(arr, m, n, output){

//         // Add current word to output array
//         output[m] = arr[m][n]
//         console.log(output)
//         // If this is last word of current output sentence, then print
//         // the output sentence
//         if(m == R - 1){
//             for(let i = 0; i < R; i++)
//                 document.write(output[i]," ")
//             document.write("</br>")
//             return
//         }

//         // Recur for next row
//         for(let i = 0; i < C; i++){
//             if(arr[m+1][i] != "")
//                 printUtil(arr, m+1, i, output)
//         }
//     }

// S = "aabaa"
// let stack = []
// let str = S.split("")
// for (var i = 0; i < str.length; i++) {
//     if (stack.length == 0) {
//         stack.push(str[i])
//     }else{
//         if (stack[stack.length - 1] != str[i + 1] && str.length>i+1) {
//             stack.push(str[i+1])
//         } else {
//             continue
//         }
//     }

// }

// console.log(stack.join(''))

// let s1 = "ABCDGH"
// let s2 = "AEDFHR"
// let s =new Set()
// S1 = s1.split("")
// S2 = s2.split("")
// for (var i = 0; i < S1.length; i++) {
//     s.add(S1[i])
// }
// for (var i = 0; i < S2.length; i++) {
//     s.add(S2[i])
// }
// // console.log(s)


// let sentence="thequickbrownfoxjumpsoverthelazydog"
//     let flag=true
//     console.log(sentence.charCodeAt(1))
//     console.log(65<=sentence.charCodeAt(i) && sentence.charCodeAt(i) >=122)
//     for(var i=0;i<sentence.length-1;i++){
//         if(65<=sentence.charCodeAt(i)>=122){
//             flag=true
//         }else{
//             flag=false
//         }
//     }
// console.log(flag)

// sentence.charCodeAt(i)-"a"
// const a1=[11,1,13,21,3,7,11]
// const a2=[11,3,7,1]

// let obj1={}
// for(var i=0;i<a1.length;i++){
//     if(obj1[a1[i]]){
//         obj1[a1[i]]+=1
//     }else{
//         obj1[a1[i]]=1
//     }
// }
// let obj2={}
// for(var j=0;j<a2.length;j++){
//     if(obj2[a2[i]]){
//         obj2[a2[i]]+=1
//     }else{
//         obj2[a2[i]]=1
//     }
// }
// console.log(obj2,obj2.length)

var a=10
{
    let a=100
    console.log(a)
}
console.log(a)
