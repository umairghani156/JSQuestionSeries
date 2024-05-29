// //1-Write a function that returns the reverse of a string?

// function reverseString(n){
//     let str =""
//     for(let i = n.length -1; i >= 0; i--){
//        str += n[i]
//     }
//     return str;
// }

// console.log(reverseString("Yasir"));

// function hello(str){
//     let cvrt = str.split("").reverse().join("")
//     return cvrt
// }
// console.log(hello("Asim"));

// //2- Write a function that returns the longest word in the sentence.
// function longWord(val){
//     let check = val.split(" ");
//     let crtWord = "";
//     for(let word of check){
//         if(word.length > crtWord.length){
//           crtWord = word
//         }
//     }
//     return crtWord
// }
// console.log(longWord("Hello Javascript is the initial stage to become a developer."));

// function w(str){
//     let hello = str.split(" ");
//   //  let newStr = "";
//     for(let i = 0; i < hello.length; i++){
//     //    if(hello[i].length > newStr.length){
//     //     newStr = hello[i]
//     //    }
//     console.log(hello[i].length);
//     }
//   //  return newStr
// }
// console.log(w("This is the longest"));

// // Write a function that checks whether a given string a palindrome or not?
// function checkWord(para){
//     let checkPara = para.split(" ");
//     let check = ""
//    for(let i = 0; i < checkPara.length; i++){
//     if(checkPara[i]== "palindrome"){
//         check = "yes"
//     }else{
//         check = "No"
//     }
//    }
//     return check
// }
// console.log(checkWord("palindrome he yar"));

// function isPalindrome(str){
//     let word = str.split("");
//     let check= "";
//     for(let i = word.length -1; i >= 0; i--){
//        check += word[i]
//        console.log(word[i]);

//     }
//     console.log(check);
//     return check === str
// }
// console.log(isPalindrome("madam"));

// function isPalindrome2(str){
//     let c = str.split("").reverse().join("");
//     console.log(c);

//     return c === str
// }
// console.log(isPalindrome2("level"));

// let name = "umair";
// const ch = name.slice(0,1).toUpperCase();
// const ch2 = name.slice(1).toLowerCase();
// console.log(ch + ch2);
// console.log(ch);

// //Write a function to remove duplicate elements from an array;

// function duplicateFunc(arr){

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 4){
//             arr.splice(i,4)

//         }else if(arr[i] == 5){
//             arr.splice(i,1)

//         }
//         else if(arr[i] == 6){
//             arr.splice(i,1)

//         }

//     }
//     return arr
// }
// console.log(duplicateFunc([1, 2,3,4, 4,4,4,4, 5, 5, 6,6,]));

// //Write a number to check if a given number is prime or not?

// function primeNum(num){
//     for(let i =2; i <= num/2; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(primeNum(11))

// // 6-Given a string, reverse each word in the sentence
// //Today is the fantastic day

// let text = "Today is the fantastic day"
// let h2 = ""
// let cvrt = text.split(" ");
// for(let i = 0; i < cvrt.length; i++){
//     const h = cvrt[i].split("").reverse().join("")
//     h2 += h+ " "


// }
// console.log(h2);

// let str = "hey Umair How are you and what are you doing today?";
//  const h3 =str.split(" ").map((word)=>{
//     console.log(word.split("").reverse().join(""));
//     return word.split("").reverse().join("")
// })
// console.log(h3.join(" "));

// // How to empty an array in javascript?

// const arr = [1, 2, 3, 4, 5, 6];
// arr.length = 0
// console.log(arr);
// // let n = 4
// // let n2 = n
// // n = 5
// // console.log(n2);
// // console.log(n);


// // let arr = [1, 2, 3, 4, 5, 6]
// // let arr2 = arr
// // arr2[1]= 30
// // arr[0] = 20;
// // console.log(arr);
// // console.log(arr2);

// // let arr3 = [ 2, 5, 6, 7,];
// // let arr4 = arr3;
// // arr3 = []
// // console.log(arr3);
// // console.log(arr4 );

// //How to check is this an array or not?
// function check(ele){
//     return Array.isArray(ele)
// }

// console.log(check([]));
// console.log(check({}));
// //console.log(check(5));


// var a = 12;

// function check(){
//     console.log(a);
//     var a = 20
// }
// check()

// let b = 14;

// function check2(){
//     console.log(b);
//    // let b = 20
// }
// check2()


// // let number = 1;

// // for(let i =1; i <= 10; i++){
// //    console.log(number += i);
// // }
// // console.log(number);

// console.log("hello1");
// setTimeout(()=>{
//     console.log("hello world");
// },1)
// const promise = new Promise((resolve, reject)=>{
//    resolve("Promise")
// })
// promise.then((res)=>{
//     console.log(res);
// })
// console.log("hello2");

// let date = new Date("31/december/2020");

// console.log(date);

// //
// for (var i = 1; i <= 3; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(j);
//         }, 1000 * j);
//     })(i);
// }

// // how to check miss number in an array

// const numbers = [11, 12, 14, 15, 16, 17, 18, 19, 20,21,23,24, 26,];
// for(let i = 0; i < numbers.length; i++){
//    let check = numbers[i + 1] - numbers[i]
//    if(check > 1){
//     console.log(check + numbers[i -1]);
//    }
// }

// // Check the number of occurence of words

// function words(str){
//     let occurence = {}
//     str.split("").forEach(element => {
//         if(occurence.hasOwnProperty(element) == false){
//             occurence[element] = 1
//         }else{
//             occurence[element]++
//         }
//     });
//     return occurence
// }
// console.log(words("Hello"))

//promise concepts

// const promise =new Promise((resolve, reject)=>{
//     document.getElementById("btn").addEventListener('click',()=>{
//         resolve("resolve")
//     });
//     document.getElementById("btn2").addEventListener('click',()=>{
//         reject("reject")
//     })
// })
// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// function hello(arr){
//     return [...arr]
// }
// console.log(hello([1,2,3,4,5]));

// function checkType(tp){
//     if(Array.isArray(tp)){
//         return "array"
//     }else{
//         return typeof tp
//     }
// }
// console.log(checkType(1));
// console.log(checkType("12"));
// console.log(checkType([1,2]));
// console.log(checkType({}));
// console.log(checkType(false));


// //To find Occurence of words in a string

// function findLetters(letter){
//     let occurence = {};
//     letter.split(" ").forEach(element => {
//        element.split("").forEach((ele)=>{
//         console.log(ele);
//         if(occurence.hasOwnProperty(ele) == false){
//             occurence[ele] = 1
//         }else{
//             occurence[ele]++
//         }
//        })
//     });
//     return occurence;

// }
// console.log(findLetters("Hello my name is umair"));

// //Array first element return 

// function firstEle(arr){
//     return arr[arr.length-1]
// }
// console.log(firstEle([1, 2, 3, 4, 5, 6,]));

// //Finding Frequent element in an array

// function fre(arr){
//     let c ={}
//     arr.forEach((ele)=>{
//        if(c.hasOwnProperty(ele)===false){
//          c[ele] = 1
//        }else{
//         c[ele]++
//        }
//     })
//     return c
// }
// console.log(fre([1,2,3,4,5,6,6,7,8,9, 10, 10]))







// UserDate 12/04/2024
//2024/12/04


// function foo(userDate) {
//     const date = userDate.split("/").reverse().slice(0, 1);
//     const date2 = userDate.split("/").slice(0, 2)
//     const third = date.concat(date2);
//     console.log(third.join(""));
//     console.log(date2);


// }
// foo("12/04/2024")
// var n = "";
// var b = "string"
// console.log(!n);//
// console.log(!!b);

// function calculateFinalSpeed(initialSpeed, inclinations) {
//     const f = inclinations.reduce((acc, cur) => {
//         return acc + cur
//     }, 0)
//     return initialSpeed - f

// }

// console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));

// function decorateDiv() {
//     const newEement = `
// <div id="a">
//   <div id="b">
//   </div>
// </div>`;
// document.body.appendChild(newEement)
// }
// decorateDiv()
// var allDivs = document.getElementsByTagName("div");
// const c = document.getElementById("a");
// var newDiv = document.createElement("div");
// //newDiv.append(newDiv)
// console.log(allDivs);

// function appendChildren() {
//     console.log(allDivs.length);

//     for (var i = 0; i < allDivs.length; i++) {
//         var newDiv = document.createElement("div");



//         //allDivs[i].appendChild(newDiv);
//     }
// }
//appendChildren()


// const arr = ["Umair","faiz","Yasir","Habib"];
// let index = 3;
// const btn = document.getElementById("hello");
// const header = document.getElementById("header");
// console.log(arr[index - arr.length]);

// btn.addEventListener('click',()=>{
//     if(arr[index - arr.length]){
//         index = 0
//     }else{
//    header.innerText = arr[index]
//    index++
//     }
// })

// console.log(1 > 2 > 3);
// console.log(3 > 2 > 1);
// console.log(1 < 2 < 3);
// console.log(false > -1);
// const p = document.getElementsByTagName("p");
// console.log(p);
// let h = [...p]
// const span = document.getElementById("colorSpan")
// function hello(){
//     if( document.body.style.backgroundColor == "black"){
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     span.innerHTML = "white"
//     h.forEach(element => {
//         element.style.color = "red"
//     });
//     }else{
//         document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     span.innerText = "black"
//     h.forEach(element => {
//         element.style.color = "yellow"
//     });

//     }
// }


// function hello(){
//     return ()=>{
//         console.log("hello world");
//     }
// }
// console.log(hello()())

const obj = {
    name: "Umair"
}

function hello(age,str){
    console.log(this.name + " is "+ age + " old "+ str);
}
hello.bind(obj, 23, "hello")()


//Check longest word in String

function hello2(str){
    let longestWord ="";
    let word = str.split(" ").forEach(element => {
        if(element.length > longestWord.length){
            longestWord = element
        }
    });
    console.log(longestWord);

}

hello2("Hello this is Umair Ahmed from Pakistan. He is Mern Stack Developer. He is currently looking for an opportunity to join a company.")