// // //1-Write a function that returns the reverse of a string?

// // function reverseString(n){
// //     let str =""
// //     for(let i = n.length -1; i >= 0; i--){
// //        str += n[i]
// //     }
// //     return str;
// // }

// // console.log(reverseString("Yasir"));

// // function hello(str){
// //     let cvrt = str.split("").reverse().join("")
// //     return cvrt
// // }
// // console.log(hello("Asim"));

// // //2- Write a function that returns the longest word in the sentence.
// // function longWord(val){
// //     let check = val.split(" ");
// //     let crtWord = "";
// //     for(let word of check){
// //         if(word.length > crtWord.length){
// //           crtWord = word
// //         }
// //     }
// //     return crtWord
// // }
// // console.log(longWord("Hello Javascript is the initial stage to become a developer."));

// // function w(str){
// //     let hello = str.split(" ");
// //   //  let newStr = "";
// //     for(let i = 0; i < hello.length; i++){
// //     //    if(hello[i].length > newStr.length){
// //     //     newStr = hello[i]
// //     //    }
// //     console.log(hello[i].length);
// //     }
// //   //  return newStr
// // }
// // console.log(w("This is the longest"));

// // // Write a function that checks whether a given string a palindrome or not?
// // function checkWord(para){
// //     let checkPara = para.split(" ");
// //     let check = ""
// //    for(let i = 0; i < checkPara.length; i++){
// //     if(checkPara[i]== "palindrome"){
// //         check = "yes"
// //     }else{
// //         check = "No"
// //     }
// //    }
// //     return check
// // }
// // console.log(checkWord("palindrome he yar"));

// // function isPalindrome(str){
// //     let word = str.split("");
// //     let check= "";
// //     for(let i = word.length -1; i >= 0; i--){
// //        check += word[i]
// //        console.log(word[i]);

// //     }
// //     console.log(check);
// //     return check === str
// // }
// // console.log(isPalindrome("madam"));

// // function isPalindrome2(str){
// //     let c = str.split("").reverse().join("");
// //     console.log(c);

// //     return c === str
// // }
// // console.log(isPalindrome2("level"));

// // let name = "umair";
// // const ch = name.slice(0,1).toUpperCase();
// // const ch2 = name.slice(1).toLowerCase();
// // console.log(ch + ch2);
// // console.log(ch);

// // //Write a function to remove duplicate elements from an array;

// // function duplicateFunc(arr){

// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i] == 4){
// //             arr.splice(i,4)

// //         }else if(arr[i] == 5){
// //             arr.splice(i,1)

// //         }
// //         else if(arr[i] == 6){
// //             arr.splice(i,1)

// //         }

// //     }
// //     return arr
// // }
// // console.log(duplicateFunc([1, 2,3,4, 4,4,4,4, 5, 5, 6,6,]));

// // //Write a number to check if a given number is prime or not?

// // function primeNum(num){
// //     for(let i =2; i <= num/2; i++){
// //         if(num % i === 0){
// //             return false
// //         }
// //     }
// //     return true
// // }
// // console.log(primeNum(11))

// // // 6-Given a string, reverse each word in the sentence
// // //Today is the fantastic day

// // let text = "Today is the fantastic day"
// // let h2 = ""
// // let cvrt = text.split(" ");
// // for(let i = 0; i < cvrt.length; i++){
// //     const h = cvrt[i].split("").reverse().join("")
// //     h2 += h+ " "


// // }
// // console.log(h2);

// // let str = "hey Umair How are you and what are you doing today?";
// //  const h3 =str.split(" ").map((word)=>{
// //     console.log(word.split("").reverse().join(""));
// //     return word.split("").reverse().join("")
// // })
// // console.log(h3.join(" "));

// // // How to empty an array in javascript?

// // const arr = [1, 2, 3, 4, 5, 6];
// // arr.length = 0
// // console.log(arr);
// // // let n = 4
// // // let n2 = n
// // // n = 5
// // // console.log(n2);
// // // console.log(n);


// // // let arr = [1, 2, 3, 4, 5, 6]
// // // let arr2 = arr
// // // arr2[1]= 30
// // // arr[0] = 20;
// // // console.log(arr);
// // // console.log(arr2);

// // // let arr3 = [ 2, 5, 6, 7,];
// // // let arr4 = arr3;
// // // arr3 = []
// // // console.log(arr3);
// // // console.log(arr4 );

// // //How to check is this an array or not?
// // function check(ele){
// //     return Array.isArray(ele)
// // }

// // console.log(check([]));
// // console.log(check({}));
// // //console.log(check(5));


// // var a = 12;

// // function check(){
// //     console.log(a);
// //     var a = 20
// // }
// // check()

// // let b = 14;

// // function check2(){
// //     console.log(b);
// //    // let b = 20
// // }
// // check2()


// // // let number = 1;

// // // for(let i =1; i <= 10; i++){
// // //    console.log(number += i);
// // // }
// // // console.log(number);

// // console.log("hello1");
// // setTimeout(()=>{
// //     console.log("hello world");
// // },1)
// // const promise = new Promise((resolve, reject)=>{
// //    resolve("Promise")
// // })
// // promise.then((res)=>{
// //     console.log(res);
// // })
// // console.log("hello2");

// // let date = new Date("31/december/2020");

// // console.log(date);

// // //
// // for (var i = 1; i <= 3; i++) {
// //     (function (j) {
// //         setTimeout(() => {
// //             console.log(j);
// //         }, 1000 * j);
// //     })(i);
// // }

// // // how to check miss number in an array

// // const numbers = [11, 12, 14, 15, 16, 17, 18, 19, 20,21,23,24, 26,];
// // for(let i = 0; i < numbers.length; i++){
// //    let check = numbers[i + 1] - numbers[i]
// //    if(check > 1){
// //     console.log(check + numbers[i -1]);
// //    }
// // }

// // // Check the number of occurence of words

// // function words(str){
// //     let occurence = {}
// //     str.split("").forEach(element => {
// //         if(occurence.hasOwnProperty(element) == false){
// //             occurence[element] = 1
// //         }else{
// //             occurence[element]++
// //         }
// //     });
// //     return occurence
// // }
// // console.log(words("Hello"))

// //promise concepts

// // const promise =new Promise((resolve, reject)=>{
// //     document.getElementById("btn").addEventListener('click',()=>{
// //         resolve("resolve")
// //     });
// //     document.getElementById("btn2").addEventListener('click',()=>{
// //         reject("reject")
// //     })
// // })
// // promise.then((res)=>{
// //     console.log(res);
// // }).catch((err)=>{
// //     console.log(err);
// // })

// // function hello(arr){
// //     return [...arr]
// // }
// // console.log(hello([1,2,3,4,5]));

// // function checkType(tp){
// //     if(Array.isArray(tp)){
// //         return "array"
// //     }else{
// //         return typeof tp
// //     }
// // }
// // console.log(checkType(1));
// // console.log(checkType("12"));
// // console.log(checkType([1,2]));
// // console.log(checkType({}));
// // console.log(checkType(false));


// // //To find Occurence of words in a string

// // function findLetters(letter){
// //     let occurence = {};
// //     letter.split(" ").forEach(element => {
// //        element.split("").forEach((ele)=>{
// //         console.log(ele);
// //         if(occurence.hasOwnProperty(ele) == false){
// //             occurence[ele] = 1
// //         }else{
// //             occurence[ele]++
// //         }
// //        })
// //     });
// //     return occurence;

// // }
// // console.log(findLetters("Hello my name is umair"));

// // //Array first element return 

// // function firstEle(arr){
// //     return arr[arr.length-1]
// // }
// // console.log(firstEle([1, 2, 3, 4, 5, 6,]));

// // //Finding Frequent element in an array

// // function fre(arr){
// //     let c ={}
// //     arr.forEach((ele)=>{
// //        if(c.hasOwnProperty(ele)===false){
// //          c[ele] = 1
// //        }else{
// //         c[ele]++
// //        }
// //     })
// //     return c
// // }
// // console.log(fre([1,2,3,4,5,6,6,7,8,9, 10, 10]))







// // UserDate 12/04/2024
// //2024/12/04


// // function foo(userDate) {
// //     const date = userDate.split("/").reverse().slice(0, 1);
// //     const date2 = userDate.split("/").slice(0, 2)
// //     const third = date.concat(date2);
// //     console.log(third.join(""));
// //     console.log(date2);


// // }
// // foo("12/04/2024")
// // var n = "";
// // var b = "string"
// // console.log(!n);//
// // console.log(!!b);

// // function calculateFinalSpeed(initialSpeed, inclinations) {
// //     const f = inclinations.reduce((acc, cur) => {
// //         return acc + cur
// //     }, 0)
// //     return initialSpeed - f

// // }

// // console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));

// // function decorateDiv() {
// //     const newEement = `
// // <div id="a">
// //   <div id="b">
// //   </div>
// // </div>`;
// // document.body.appendChild(newEement)
// // }
// // decorateDiv()
// // var allDivs = document.getElementsByTagName("div");
// // const c = document.getElementById("a");
// // var newDiv = document.createElement("div");
// // //newDiv.append(newDiv)
// // console.log(allDivs);

// // function appendChildren() {
// //     console.log(allDivs.length);

// //     for (var i = 0; i < allDivs.length; i++) {
// //         var newDiv = document.createElement("div");



// //         //allDivs[i].appendChild(newDiv);
// //     }
// // }
// //appendChildren()


// // const arr = ["Umair","faiz","Yasir","Habib"];
// // let index = 3;
// // const btn = document.getElementById("hello");
// // const header = document.getElementById("header");
// // console.log(arr[index - arr.length]);

// // btn.addEventListener('click',()=>{
// //     if(arr[index - arr.length]){
// //         index = 0
// //     }else{
// //    header.innerText = arr[index]
// //    index++
// //     }
// // })

// // console.log(1 > 2 > 3);
// // console.log(3 > 2 > 1);
// // console.log(1 < 2 < 3);
// // console.log(false > -1);
// // const p = document.getElementsByTagName("p");
// // console.log(p);
// // let h = [...p]
// // const span = document.getElementById("colorSpan")
// // function hello(){
// //     if( document.body.style.backgroundColor == "black"){
// //     document.body.style.backgroundColor = "white";
// //     document.body.style.color = "black";
// //     span.innerHTML = "white"
// //     h.forEach(element => {
// //         element.style.color = "red"
// //     });
// //     }else{
// //         document.body.style.backgroundColor = "black";
// //     document.body.style.color = "white";
// //     span.innerText = "black"
// //     h.forEach(element => {
// //         element.style.color = "yellow"
// //     });

// //     }
// // }


// // function hello(){
// //     return ()=>{
// //         console.log("hello world");
// //     }
// // }
// // console.log(hello()())

// // const obj = {
// //     name: "Umair"
// // }

// // function hello(age,str){
// //     console.log(this.name + " is "+ age + " old "+ str);
// // }
// // hello.bind(obj, 23, "hello")()


// // //Check longest word in String

// // function hello2(str){
// //     let longestWord ="";
// //     let word = str.split(" ").forEach(element => {
// //         if(element.length > longestWord.length){
// //             longestWord = element
// //         }
// //     });
// //     console.log(longestWord);

// // }

// // hello2("Hello this is Umair Ahmed from Pakistan. He is Mern Stack Developer. He is currently looking for an opportunity to join a company.") 

// // let arr = [1, 2, 3, 4 , 5];//[1, 2, 3, 4 , 51, 2, 3, 4 , 5]
// // let arr2 = [1, 2, 3, 4 , 5];
// // let check = arr + arr2
// // console.log(typeof check); //


// // for(var i =0; i < 4; i++){
// //     console.log(i);
// //     setTimeout(()=>{
// //         console.log(i);
// //     },1000)
// // }

// // const input1 = {a:1, b:2, c:3,d:10,e:12}
// // const input2 = {a:2, e:12, f:6,d:10}

// // const outPut = {};
// // for(const input in input1){
// //     if(input1[input]){
// //         for(const j in input2){
// //             if(j ===input && input1[input] === input2[input]){
// //                 outPut[j] = input2[j]
// //             }
// //         }
// //     }
    
// // }
// // console.log(outPut);

// // const input2 = [1, 4, 7, 2, 4, 7];
// // const input = [1, 2, 2, 11, 7,1];
// // function hello(input){
// //     const srt = input.sort((a,b)=> a -b);
// //     let arr = srt[srt.length -1]
// //     console.log(arr);
// //     for(let i = srt.length - 2; i >= 0; i-- ){
// //        if(input[i] !=arr){
// //         arr = input[i]
// //         break
// //        }
// //     }
// //    return arr;
    
// // }
// // console.log(hello(input2)); 

// // //Third question 
// // function hello2(str){
// //    let n = {};
// //    str.split("").forEach(element => {
// //      if(!n.hasOwnProperty(element)){
// //        n[element] = 1
// //      }else{
// //       n[element]++
// //      }

// //    });
// //    console.log(n);
// // }
// // hello2("hello world")


// //Leet Code first Challenge Code

// //Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// //Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
// //Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// // const arr1 = [2,3,1,3,2,4,6,7,9,2,19];
// // const arr2 = [2,1,4,3,9,6];
// // //Output: [2,2,2,1,4,3,3,9,6,7,19]

// // function arrCvrt(a1,a2){
// //    let freqNum = {};
// //    for(let i =0; i < a1.length; i++){
// //        if(!freqNum.hasOwnProperty(a1[i])){
// //          freqNum[a1[i]] = 1
// //        }else{
// //          freqNum[a1[i]]++
// //        }
// //    }
  
// //    let result = [];
// //     for (let num of a2) {
// //         while (freqNum[num] > 0) {
// //             result.push(num);
// //             freqNum[num]--;
// //         }
// //     }
// //     console.log(result);

// //     let remaining = [];

// //     for(let num in freqNum){
// //       while (freqNum[num] > 0) {
// //          remaining.push(parseInt(num));
// //          freqNum[num]--;
// //      }
// //     }
// //     const cont = result.concat(remaining);
// //     return cont

// // }
// // console.log(arrCvrt(arr1,arr2));

// // const arr = [10,20,30]

// // const hello2 = arr.map((val)=> 44)
// // console.log(hello2);

// // const  arr = [1,2,3].map((val)=> val + 1);
// // console.log(arr);

// // const arr = [0,10,20,30].filter((f)=> f > 10);
// // console.log(arr);

// // const arr = [-2,-1,0,1,2].filter((val)=> val + 1);
// // console.log(arr);

// // const nums = [1,2,3,4].reduce((acc, cur)=> acc + cur,0);
// // console.log(nums);
// // const nums = [].reduce((acc,cur)=>{
// //    return 0
// // },25);
// // console.log(nums);

// // const n = 1 > 2> 3> 4;
// // console.log(n);

// //How to find min and max value in an array

// // const numbers = [10, 6, 3, 7, 9, 12];

// // function minAndMax(arr){
// //     let min = arr[0];
// //     let max = arr[0];
// //    for(let i = 0; i<arr.length; i++){
// //     if(arr[i] > max){
// //         max = arr[i]
// //     }else if(arr[i] < min){
// //         min = arr[i]
// //     }
// //    }
// //    return [min, max]
// // }
// // console.log(minAndMax(numbers));

// //Second method to find min and max value
// const numbers = [30, 60, 10, 53, 1000, 300];

// function minAndMax(arr){
//     const minVal = Math.min(...arr);
//     const maxVal = Math.max(...arr);

//    return [minVal, maxVal]
// }
// console.log(minAndMax(numbers));

// //How to find Second Largest value and remove the largest Value

// const arr4 = [5, 87, 45,2, 5, 8,10,56];

// function largestVal(arr){
//    let sLargest = arr[0];
//    for(let i = 0; i < arr.length;i++){
//     if(arr[i] > sLargest){
//        sLargest = arr[i]
//     }
//    }
//    let i = 0;
//    while(i < arr.length){
//     if(arr[i] === sLargest){
//         arr.splice(i, 1)
//     }else{
//         i++
//     }
//    }
   
//     let seconLargestNum = arr[0];
//     for(let j =0; j<arr.length;j++){
//         if(arr[j] > seconLargestNum){
//             seconLargestNum = arr[j]
//         }
//     }
//     return seconLargestNum
// }
// console.log(largestVal(arr4));

// const arr5 = [1, 2, 3, 4, 5, 6];
// const ans = arr5.some((val)=> val === 5);
// console.log(ans);
// const h = arr5.copyWithin(0, 2, 3,60);
// console.log(h);

// //How to find missing number in an array
// const arr6 = [11, 12, 13, 14, 16, 17, 19,20];
// function missingNum(arr){
//    let newArr = [];
//    let another = new Set(arr);
//    const min = Math.min(...arr);
//    const max = Math.max(...arr);
//   for(let i = min; i <= max; i++){
//      if(!another.has(i)){
//         newArr.push(i)
//      }
//   }
//   return newArr

// }
// missingNum(arr6);

// //How to find odd or even number in an array
// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function oddAndEven(arr){
//     const oddNumber = [];
//     const evenNumber = [];
//     const number = arr.map((val)=>{
//         if(val % 2){
//             oddNumber.push(val)
//         }else{
//             evenNumber.push(val)
//         }
//     })
//     console.log(oddNumber);
//     console.log(evenNumber);
//     return [
//        {oddNumber,
//        evenNumber}
//     ]

// };
// console.log(oddAndEven(arr7));

// //How to find the sum of all elements in a given an array;

// const arr8= [1, 2, 3, 5, ,6];

// function sum(arr){
//     const ans = arr.reduce((acc, cur)=> acc+ cur, 0);
//     return ans
// }
// console.log(sum(arr8));

// //How to find prime number in javascript

// const arr9 = [11, 12, 13, 15, 16, 17, 18, 19, 20];
 
// function isPrime(n){
//    if(n <= 0) return false;
//    if(n === 2) return true
//    if(n % 2 === 0) return false;
//    const maxDivisor =Math.floor(Math.sqrt(n));
//    for (let i = 3; i <= maxDivisor; i += 2) {
//     if (n % i === 0) return false;
// }
// return true;

// }

// function isPrimeNum(arr){
//    const ans = arr.filter((val)=> isPrime(val))
//    return ans
// }
// console.log(isPrimeNum(arr9))

// function hello(number){
//    const newNumber = new Set(number);
//    console.log(newNumber);
// }
// hello([1, 2, 3, 4, 6,6,7,8])

// const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr11 = arr10.slice(0, 5);
// console.log(arr11);


// const dummyName = ["sara", "william","haroon"];

// function hello2(name){
//    const ans = name.map((val)=> val.toUpperCase())
//    return ans
// }
// console.log(hello2(dummyName));


// const scoreArr=[
//     {
//         id:1,
//         name: "Ahmed",
//         score: 67,
//     },
//     {
//         id:2,
//         name: "Umair",
//         score: 89,
//     },
//     {
//         id:3,
//         name: "Zakir",
//         score: 80,
//     }
// ];

// function scoreHandler(score){
//    const ans = score.filter((val)=> val.score >= 80)
//    return ans
// }
// console.log(scoreHandler(scoreArr));


// const arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function largestVal(arr){
//    const ans = arr.reduce((acc, cur)=> acc > cur ? acc : cur)
//    return ans
// }
// console.log(largestVal(arr12));


// function ageName(){
//     // "use strict";
//     agePerson = 24; // Uncaught ReferenceError: agePerson is not defined
//     console.log(agePerson);
// };
// //ageName()

// const sum2 = eval('12*5 + 2');
// console.log(sum2);

// const obj = [
//     {
//         id: 1,
//         name: "Ahmed",
//         score: 67,
//     },
//     {
//         id: 2,
//         name: "Umair",
//         score: 89,
//     },
//     {
//         id: 3,
//         name: "Zakir",
//         score: 80,
//     }
// ];

// function scoreHandler(score){
//    const ans = score.filter((val)=> val.score >= 80)
//    return ans
// }
// console.log(scoreHandler(obj));


// //Whether the word is palindrome or not

// function isPalindrome(w){
//    const check = w.split("").reverse().join("");
//    return check === w
// }

// console.log(isPalindrome("racecar"));

// function isDuplicate(arr){
//     const ans = new Set(...arr);
//     return ans
// };
// console.log(isDuplicate[1,1,2,3,4,5,6,6, 19, 10, 25, 6]);

// //Symbol- This datatype is a new primitive data type introduced in
// // JavaScript ES6. Symbols are immutable (they cannot be modified) and one-of-a-kind.

// // const value1 = Symbol("World");
// // const value2 = Symbol("World");
// // console.log(value1 === value2);

// // const uniqueKey = Symbol("uniqueKey");

// // const obj2 = {
// //     [uniqueKey]: 1
// // };
// // obj2[uniqueKey] = 2;
// // console.log(obj2[uniqueKey]);

// const oldKey = Symbol("oldKey");
// const newKey = Symbol("newKey");
// const obj3 = {
//     [oldKey]: 1
// };
// obj3[newKey] = obj3[oldKey];
// delete obj3[oldKey];
// console.log(obj3[newKey]);
// console.log(obj3[oldKey]);


//  //Third question 
// // function hello2(str){
// //    let n = {};
// //    str.split("").forEach(element => {
// //      if(!n.hasOwnProperty(element)){
// //        n[element] = 1
// //      }else{
// //       n[element]++
// //      }

// //    });
// //    console.log(n);
// // }
// // hello2("hello world")


// // //Finding Frequent element in an array

// // function fre(arr){
// //     let c ={}
// //     arr.forEach((ele)=>{
// //        if(c.hasOwnProperty(ele)===false){
// //          c[ele] = 1
// //        }else{
// //         c[ele]++
// //        }
// //     })
// //     return c
// // }
// // console.log(fre([1,2,3,4,5,6,6,7,8,9, 10, 10]));


// //1-Write a function that returns the reverse of a string?

// // function reverseString(n){
// //     let str =""
// //     for(let i = n.length -1; i >= 0; i--){
// //        str += n[i]
// //     }
// //     return str;
// // }

// // console.log(reverseString("Yasir"));

// //1-Write a function that returns the reverse of a string?

// // function reverseString(n){
// //     let str =""
// //     for(let i = n.length -1; i >= 0; i--){
// //        str += n[i]
// //     }
// //     return str;
// // }

// // console.log(reverseString("Yasir"));

// // if(true){
// //     console.log("Chl rha hn");
// // }else{
// //     console.log("Chl nhi rha hn");
// // }

// // if("0"){
// //     console.log("Chl rha hn");
// // }else{
// //     console.log("Chl nhi rha hn");
// // }


// // if(0){
// //     console.log("Chl rha hn");
// // }else{
// //     console.log("Chl nhi rha hn");
// // }

// const promiseName = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("Yasir")
//     }else{
//         reject("Error")
//     }
// })
// promiseName.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// const hello4 = {
//     name: "Yasir",
//     age: 23,
// };
// function hello5(){
//     console.log(this.name, this.age);
// }

// hello5.call(hello4);

// function hello6(){
//     console.log(this.name, this.age);
// }

// const check = hello6.bind(hello4);
// console.log(check());


// const person = {
//     firstName: "Yasir",
//     lastName: "Ahmed",
//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// };

// const person2 = {
//     firstName: "Umair",
//     lastName: "Ahmed",
// };

// const printName = person.fullName.bind(person2);

// printName();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ans2 = arr.filter((val)=> val % 2 === 0);
// console.log(ans);

// const name = "habib";

// const ans3 = name.split("").reverse().join("");

//Random Coin Clickable Game

// document.addEventListener("DOMContentLoaded", function() {
//     const elementDev = document.createElement("div");
//     document.body.append(elementDev);
//     elementDev.setAttribute("id", "a");
//     elementDev.style.width = "100%";
//     elementDev.style.position = "relative";
//     elementDev.style.height = "100vh";
//     elementDev.style.backgroundColor = "white";

//     const idDev = document.getElementById("a");
//     let randomval = Math.floor(Math.random() * 6) + 1;
//     let clickCount = 0;
//     const coinCounts = {
//         rupee1: 0,
//         rupee2: 0,
//         rupee3: 0,
//         rupee4: 0,
//         rupee5: 0
//     };

//     idDev.addEventListener("click", (e) => {
//         if (clickCount < 20) {
//             const coinImage = document.createElement("img");
//             const elementDev2 = document.createElement("div");
            
//             coinImage.src = `./images/rupee${randomval}.png`;
//             coinImage.style.width = "100%";
//             coinImage.style.height = "100%";
//             coinImage.style.objectFit = "cover";

//             const xPosition = e.clientX - idDev.offsetLeft;
//             const yPosition = e.clientY - idDev.offsetTop;

//             elementDev2.append(coinImage);
//             elementDev2.style.position = "absolute";
//             elementDev2.style.top = `${yPosition}px`;
//             elementDev2.style.left = `${xPosition}px`;
//             elementDev2.style.width = "50px";
//             elementDev2.style.height = "50px";
//             elementDev2.style.borderRadius = "50%";
//             elementDev2.style.overflow = "hidden"; 

//             idDev.appendChild(elementDev2);

//             const coinType = `rupee${randomval}`;
//             coinCounts[coinType]++;

            
//             randomval = Math.floor(Math.random() * 6) + 1;

//             clickCount++;
//         } else {
           
//             let maxCoin = "";
//             let maxCount = 0;

//             Object.keys(coinCounts).forEach(coinType => {
//                 if (coinCounts[coinType] > maxCount) {
//                     maxCoin = coinType;
//                     maxCount = coinCounts[coinType];
//                 }
//             });
//              if(maxCoin === "rupee1" || maxCoin === "rupee2" || maxCoin === "rupee3" || maxCoin === "rupee4" || maxCoin === "rupee5"){
//                 const winningCoins = document.querySelectorAll(`img[src='./images/${maxCoin}.png']`);
//                 winningCoins.forEach(coin => {
//                     coin.style.boxShadow = "0 0 10px green";
//                 });
//              }

//             alert(`Game Over! Winner is ${maxCoin} with ${maxCount} coins.`);
//         }
//     });
// });

 

// const devEle = document.createElement("div");
// const fetchData = ()=>{
//     fetch(" https://fakestoreapi.com/products")
//     .then((res)=> res.json())
//     .then((data)=> renderData(data))
//     .catch((err)=> console.log(err))
// }
// document.body.append(devEle);
// fetchData()
// function renderData(data){
//     console.log(data);
//     let output = "";
//     data?.forEach((val)=>{
//         output += `<h1>${val.title}</h1>`
//     })
//     devEle.innerHTML = output
// }


// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let e = 50;

// let arr = [a, b, c, d, e];

// let arr2 = [a, b, c, d, e];

// let check = arr + arr2
// let val = check.split(",").map((value)=>{
//   if(value.length == 4){
//     console.log(value);
//     const check = value.split(value.charAt(1)).join("");
//     const check2 = value.split('').slice(2).join("");
//     return `${check} ${check2}`
//   }
// });
// console.log(val);
// console.log(typeof check);

// const arr4 = [1,2,3,4,5,6,7,8,9];

// const fil = arr4.some((val)=> val === 5);
// console.log(fil);
// const fil2 = arr4.includes(5);
// console.log(fil2);

// function check4(val){
//     return val === 5
// }
// const fil3 = arr4.every(check4);
// console.log(fil3);

// function reverseString(text){
//   let text2 = "";
//   const text3 = text.split("");
//   for(let i = text3.length -1; i >= 0; i--){
//     text2 += text3[i]
//   }
//   return text2
// }
// console.log(reverseString("Yasir"));

// const x = [ 1, 2, 3];

// const y = x.map((val, i)=> val + i);

// console.log(y);

// //Promises

// const promiseFunc = (success= true)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(success){
//         resolve("Success")
//       }else{
//         reject("Failed")
//       }
//     }, 1000)
//   })
// }
// const promisePending =promiseFunc(false);
// console.log(promisePending);
// promisePending.then((data)=> console.log(data)).catch((err)=> console.log(err));

// //Dependency Injection (DI)

// class User{
//   constructor(name){
//     this.name = name
//   }
//   getName(){
//     return this.name
//   }
// }

// const user = new User("Umair");
// console.log(user.getName());

// //Another

// class dataBase{
//   connect(){
//     console.log("Connected");
//   }
// }

// class User2{
//   constructor(database){
//     this.dataBase = database
//   }
//   perfomTask(){
//     this.dataBase.connect();
//     console.log("Performing Task");
//   }
// }

// const database = new dataBase();
// console.log(database);
// const user2 = new User2(database);
// user2.perfomTask();


// //Event Bubbling

// const itemLists = document.getElementById("itemLists");
// itemLists.addEventListener("click", (e)=>{
// //  if(e.target.tagName === "LI"){
// //     console.log(e.target.textContent);
// //  }
//  console.log(e.target);
// });
// const header = document.getElementById("header");
// header.addEventListener("click", (e)=>{
//   console.log(e.target);
// },{
//   capture: true
// });

// //Javascript

// String.prototype.giveUmairPizza = function(){
//   return "Give Umair Pizza already";
// }
// const name = "Umair";
// const name2 = "Ahmed"
// console.log(name.giveUmairPizza());
// console.log(name2.giveUmairPizza());

// console.log("Umair".giveUmairPizza());

// const myArr = [1, 2, 3, 4];
// const myArr2 = [1, 2, 3, 4];
// if(myArr === myArr2){
//   console.log("Equal");
// }else{
//   console.log("Not Equal");
// }

// const obj1  = {
//   name: "Umair",
//   age: 20
// }
// const obj2 = {
//   name: "Umair",
//   age: 20
// }
// if(obj1 === obj2){
//   console.log("Equal");
// }else{
//   console.log("Not Equal");
// };

//Function composition 

// const func1 = (x)=> x + 1;
// const func2 = (x)=> x * 2;

// const compose = (a) => a * a;

// const add = compose(func1(func2(5)));
// console.log(add);

// var compose = function(functions) {
//   const add = (y)=>{
//     return y * 2
//   }
//   const mul = (y)=>{
//     return y * y
//   }

 
//   return function(x) {
//     return mul(add(x)) + 1
//   }
// };


// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4))

//var a = 20;

// function testMode(){
//  var a = 20;
//   console.log(a);
// }

// testMode();
// console.log(a);
// let x;
// console.log(x);
// console.log(x === null);

// function createCounter(){
//   let count = 0;
//  return function(){
//    count++;
//    return count
//  }
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let a = 10;
// function test(){
//    b = 30;
//   console.log(a);
// }
// test();
// console.log(b);

// var obj={
//   val:"Umair",
//   greet: function(){
//     console.log(this.val);
//     return this.value
//   }
// }
// const val = obj.greet;
// console.log(val(obj));
// console.log(obj.greet());

// function privateCounter(){
//   let count = 0;
//   return {
//     increment: function(){
//       return count += 1
//     },
//     decrement: function(){
//       return count -= 1
//     },
//     getCount: function(){
//       return count
//     }
//   }

// }
// const privateCounter2 = privateCounter();
// console.log(privateCounter2.increment());
// console.log(privateCounter().increment());
// console.log(privateCounter().decrement());
// console.log(privateCounter().getCount());

//High Order Function

// function val(a){
//   return function(b){
//     return a * b
//   }
// }
// const c = val(5);
// console.log(c(5));

// const symbols = Symbol("Umair");

// const obj = {
//   [symbols]: "Umair",
//   name: "Umair",
//   age: 20
// }
// console.log(obj[symbols]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const obj2 = {
//   name: "Umair",
//   age: 20,
//   class: 10
// }
// console.log(Object.assign(obj, obj2));
// console.log(Object.entries(obj2));
// console.log(Object.assign({}, obj2, obj));
// console.log("1"-+"1");

// console.log(String("Hello") === "Hello");

// const arr = new Array(5).toString();
// console.log(arr);

// var foo = function foo(){
  
//   console.log(foo === foo);
// }

// foo();

// function aa(){
//   return{
//     a: 1
//   }
// }

// console.log(typeof aa());

// var myArr = ["Umair", "Ahmed"];
// myArr[1]
// console.log(`1` in myArr);

// function foo(a,b){
//   arguments[1] = 10;
//   console.log(arguments);
//   console.log(b);
  
// }

// foo(1);

// var a = 1;
// let b = 2;
// const c = 3;

// {
//   var a = 10;
//   let b = 5;
//   const c = 6;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// for(var i = 0; i <= 3; i++){
//   setTimeout(function(){
//     console.log(i);
//   },1000)
// }

// const input = document.getElementById("input-text");

// function debounce(funcCall, timing){
//   let timerId;
// return (...args)=>{
//  timerId = setTimeout(()=> funcCall(...args), timing)
//   clearTimeout(timerId)
// }
// }

// const apiCall = (e)=>{
//   console.log(e.target.value);
  
// }

// const data = debounce(apiCall, 100)



// input.addEventListener("change", apiCall)

// function func2(num1, num2){
//   return num1 + num2
// }

// function callBackFunc(n,cb){
//     return cb(2,20) * n
// }

// const name2 = callBackFunc(20, func2);
// // console.log(20 * 22);
// console.log(name2);


// function closureFunc(){
//   const  n= 20;

//   return function(n2){
//     return n2 * n
//   }

// };

// const clf = closureFunc();
// console.log(clf(10));

// function hello(n){
//   return n * 3;
// }

// function hello2(num){
//   return hello(num) + 12
// }
// console.log(hello2(10)); //output 42

// //var x = 200
// function doSomething(){
//   "use strict"
//   x = 100;
//   console.log(x);
//   var x
  
// };
// doSomething()
// console.log(x);

// function formatDate(userDate) {
 
  
  
//   }
  
//   console.log(formatDate("12/31/2014"));


// function calculateFinalSpeed(initialSpeed, inclinations) {
//   // Your code goes here
//   const f = inclinations.reduce((acc, cur) => {
//    if(cur === 0){
//     return acc
//    }
//     return acc + cur
//   }, 0)
  
//   return initialSpeed - f
// }

// console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));

// function toggleEventColor(){
//   const selectedElement = document.querySelectorAll("#numbers span");
//   console.log(selectedElement);

//   selectedElement.forEach((element)=>{
//     if(element.textContent % 2 !== 0){
//       element.style.color = "red"
//     const btn =  document.getElementById("btn");
//     btn.setAttribute("onclick","toggleEventColor2()")
//     }
//   })
  
// }

// function toggleEventColor2(){
//   const selectedElement = document.querySelectorAll("#numbers span");
//   console.log(selectedElement);
//   selectedElement.forEach((element)=>{
//     if(element.textContent % 2 !== 0){
//       element.style.color = "black"
//     const btn =  document.getElementById("btn");
//     btn.setAttribute("onclick","toggleEventColor()")
//     }
//   })
// }

// const date = new Date().toLocaleDateString();
// console.log(date);


// function sortedArray(arr){
//    return arr.sort((a,b)=> a - b)
   
// }
// console.log(sortedArray([ 1, 10, 6, 7, 9]))


// function sortedArray(arr){
//    let num = Math.min(...arr);

   

//   for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//   }
//   console.log(arr);
  

  
  
  
   
   
  
// }
// console.log(sortedArray([ 1, 10, 6, 7, 9]))

// function sortedArray(arr){
//   let num = Math.min(...arr);

  

//  for (let i = 0; i < arr.length; i++) {
//        let minIndex = i;
//        for(let j = i + 1; j < arr.length; j++){
//           //console.log("min",minIndex);
//          // console.log("j",arr[j]);
//            if(arr[j] < arr[minIndex]){
//                minIndex = j
//            }
//            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

          
          
//        }
//  }
//  console.log(arr);
 

 
 
 
  
  
 
// }
// console.log(sortedArray([ 1, 10, 6, 7, 9]))

// const calculateAverage = (numbers)=>{
//    const totalNumbers = numbers.reduce((acc, cur)=>{
//     return (acc + cur)
//    }, 0)

//    return totalNumbers / numbers.length
// }
// console.log(calculateAverage([8, 6, 7, 4, 3]));
// console.log(calculateAverage([5, 10, 2, 8]));


// function arrayAreEqual(arr1, arr2){
//  if(arr1.length !== arr2.length)
//  {
//    return false
//  }

//  return arr1.every((cur, index)=> cur === arr2[index])
// }

// console.log(arrayAreEqual([1, 2],[1, 2]));
// console.log(arrayAreEqual([1, 2],[1, 2, 3]));

// console.log(arrayAreEqual([],[]));


// function sumOfDigits(num){
//   let cvrtArr = num.toString().split("")
//   return cvrtArr.reduce((acc, cur)=> acc + Number(cur), 0)
// }

// console.log(sumOfDigits(123456));



// function removeDuplicates(arr){
//    for (let i = 0; i < arr.length; i++) {
//       if(arr[i] === 7 || arr[i] === 8){
//         arr.splice(i, 1)
//       }
//    }
//    return arr
// }

// console.log(removeDuplicates([5, 6, 7, 7,7, 8, 8, 9, 7, 7, 7]));
// function removeDuplicates(arr){
// let count = 0;
// do{
//   console.log(arr[count]);
//   if(arr[count] === 7 || arr[count] === 8){
//     arr.splice(count, 1)
//   }
  
//    count++
  
// }while(count < arr.length)
//   return arr
// }
// console.log(removeDuplicates([5, 6, 7, 7,7, 8, 8, 9, 7, 7, 7]));

// function removeDuplicates(arr){
//    let count = arr.length - 1;
//    while (count >= 0) {
   
//     count--
//     if(arr[count] === 7 || arr[count] === 8){
//       arr.splice(count, 1)
//     }
//    }
//    return arr
// }
 
// console.log(removeDuplicates([5, 6, 7, 7,7, 8, 8, 9, 7, 7, 7]));

// function isPowerOfTwo(num){
//   let op = false;
//    for(let i = 0; i <= num; i++){
//     if(2 ** i === num){
//        op = true
//     }
//    }
//    return op;
// }
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(7));
// console.log(isPowerOfTwo(16));

// function sumOfsquares(arr){
//    //return arr.map((val)=> val * val).reduce((acc, cur)=> acc + cur, 0)
//    return arr.reduce((acc, cur)=> (acc + cur * cur),0)
// }
// console.log(sumOfsquares([1, 2, 3]));

// function findMinVal(arr){
//   if(arr.length === 0){
//     return 'Should not be empty'
//   }
//   const sortedval = arr.sort((a, b)=> a - b);
//   return sortedval[0]
  
// }
// console.log(findMinVal([1, -7, 8, -2]));
// console.log(findMinVal([]));


// function toCamelCase(str){
//   const h= str.split(" ")
//   const h2 = h.map((val, index)=>{
//       if(index > 0){
//         return val.slice(0,1).toUpperCase() + val.slice(1).toLowerCase();
//       }else{
//         return val
//       }
      
//   })
//   return h2.join("")
  
// }

// console.log(toCamelCase("hello world kah hhh ty "));

// function toSnakeCase(str){
//     return str.trim().split(" ").join("_")
// }
// console.log(toSnakeCase("hello habib"));


// function checkUpperCase(str){
//   // if(str === str.toUpperCase()){
//   //   return true
//   // }else{
//   //   return false
//   // }
//    if(str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90){
//     return true
//    }else{
//     return false
//    }
// }

// console.log(checkUpperCase("s"));
// console.log(checkUpperCase("T"));

// function startWith(str1, str2){
//   const val = str1.trim().split(" ");
//   // return val.includes(str2)
//   return val[0].slice(0,1).toUpperCase() + val[0].slice(1).toLowerCase() == str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
// }
// console.log(startWith("Hello world", "hello"));

// function reverseString(str){
//    return str.split("").reverse().join("")
// }
// console.log(reverseString("hello"));


// function reverseString(str){
//    const splitVal = str.split("");
//    let rvsVal = ""
//    for(let i = splitVal.length - 1; i >= 0; i--){
//       rvsVal += splitVal[i]
//    }
//    return rvsVal
// }
// console.log(reverseString("govena"));

// function calculateMean(arr){
//    const val = arr.reduce((acc, cur)=> acc + cur, 0);

//    return val / arr.length
// }

// console.log(calculateMean([1, 2, 3, 4, 5]));
// console.log(calculateMean([10, 20, 30]));
// console.log(calculateMean([-1, 0, 1]));


//How to find a mean value in the array

// function calculateMean(arr){
//   const meanVal = arr.reduce((acc, cur)=> acc + cur, 0);
//   console.log(meanVal);
  
//   return meanVal /arr.length
// };

// console.log(calculateMean([1,2,3,4, 5,6,7,8, 9,10]));
// console.log(calculateMean([10, 20, 30, 40, 50]));
// console.log(calculateMean([60, 70, 40, 20, 100]));


// function findMedian(arr){
//   arr.sort((a,b)=> a-b);
//    let length = arr.length;
//    let middle = Math.floor(length / 2);
//    if(length % 2 === 0){
//       return (arr[middle] + arr[middle -1]) /2;
      
//    }else{
//       return arr[middle]
      
//    }
   
// }
// console.log(findMedian([5, 3, 9, 1, 7]));
// console.log(findMedian([2, 4, 6, 8]));
// console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// async function hello(){
//  return await new Promise((resolve, reject)=>{
//    for(var i = 0; i < 5; i++){
//     setTimeout(()=> resolve(i), 0)
//    }
//  }
//  )

// }
//  async function h(){
//    let i = 0
//     function k(){
//       console.log(i);
      
//    }
//    await hello();
//     console.log("Hello",await hello());
    
//    return k
// }

// h().then((val)=> val());


// function occurenceElement(arr){
//    const h = arr.reduce((acc, cur)=>{
//      if(acc[cur] === undefined){
//       acc[cur] = 1
//      }else{
//       acc[cur] += 1
//      }
//      return acc
//    },{})

//    return h
   
// };
// console.log(occurenceElement([1, 2, 2, 3, 1, 4, 2]))

// function occurenceElement(arr){
//    let count = {};
//    arr.forEach(val => {
//       if(!count.hasOwnProperty(val)){
//          count[val] = 1
//       }else{
//          count[val] += 1
//       }
//    });
//    console.log(count);
   
   
// };
// console.log(occurenceElement([1, 2, 2, 3, 1, 4, 2]))

// function occurenceElement(arr){
//    let count = {}
//    for(const val of arr){
//      count[val] = (count[val] || 0) + 1
//    }
   
//    console.log(count);
   
// };
// console.log(occurenceElement([1, 2, 2, 3, 1, 4, 2]));


//  const h2 = Number(prompt("Enter number"));

// function h(input){

//    input = input ^ 9;
//    input = input ^ 6;
//    console.log(input);

 
// }
// h(h2)


// function recursion(num){
//    if(num === 1){
//       return 1
//    }else{
//       return num * recursion(num - 1)
//    }
// }

// console.log(recursion(6));
// const arrData = ["umair", "ahmed"]

// function arr(data){
//   // console.log(data);
//    // const arrData = `#${(data[0].slice(0,1).toUpperCase()+data[0].slice(1).toLowerCase()) + (data[1].slice(0,1).toUpperCase() +data[1].slice(1).toLowerCase())}`;
//    // return arrData;

   
// }

// console.log(arr(arrData)); // output #UmairAhmed


// const promptVal = prompt("Please enter your name");


// const jonas = {
//     firstName:"Umair",
//     age: 23,
//     calAge: function (){
//         console.log(this);
        
//         return 2024 - this.age
//     },
//     greet: ()=> console.log(this)
    
// };

// console.log(jonas.calAge());
// console.log(jonas.greet());

// const pr = prompt("enter kuch bhi");

// function hello(inp){
//     console.log(inp.length);
    
// }

// hello(pr);


// function repeatedString(str, num){
//     let embeddedStr= ""
//     for(let i = 1; i <= num; i++){
//          embeddedStr += str
//     }
//     return embeddedStr
// }

// console.log(repeatedString("abc",5));

//Second Method
// function repeatedString(str, num){
//    return str.repeat(num)
// }

// console.log(repeatedString("abc",10));


// function truncateString(str, num){
//    const maxlength  = str.split(" ")
//    const check = maxlength.map((str2)=>{
//       if(str2.length > num){
//         return str2.slice(0, num) + "..."
//       }else{
//         return str2
//       }
//    })
//    console.log(check);
   
   
// }
// console.log(truncateString("A-tiskit a-tasket a green and yellow basket hellortwe", 8));


// function numberRange(start, end){
//    const arr = [];
//    for(let i = start; i <= end; i++){
//     arr.push(i)
//    }
//    return arr
// }

// console.log(numberRange(0, 5));
// console.log(numberRange(3, 7));
// console.log(numberRange(3, 7));
// console.log(numberRange(-2, 2));

// function simplePasswordValidator(password){
//     if(password.length < 8){
//        return false
//     }
//     const totalPassword = password.split("");
//     const upperCaseFind = totalPassword.find((pas)=> pas === pas.toUpperCase());
//     if(upperCaseFind === "1"){
//         return false
//     }else{
//         const isInteger = totalPassword.filter((pas)=>{
//             if(pas === "0"|| pas === "1" || pas === "2" || pas === "3" || pas === "4" || pas === "5" || pas === "6"
//               || pas === "7" || pas === "8" || pas === "9"
//             ){
//                 return true
//             }
           

            
//         })
//        if(isInteger.length === 0){
//         return false
//        }else{
//         return true
//        }
       
//     }
    
  
   
    
    
    
// }
// console.log(simplePasswordValidator("helLok2"));

// const navbarItems = ["all","animal","bird","nature"];

// const imagesData = [
//     {
//         id: 1,
//         image: "./images/animal.jpg",
//         name: "animal"
//     },
//     {
//         id: 2,
//         image: "./images/animal2.jpg",
//         name: "animal"
//     },
//     {
//         id: 3,
//         image: "./images/bird.jpg",
//         name: "bird"
//     },
//     {
//         id: 4,
//         image: "./images/bird2.jpg",
//         name: "bird"
//     },
//     {
//         id: 5,
//         image: "./images/nature.jpg",
//         name: "nature"
//     },
//     {
//         id: 6,
//         image: "./images/nature2.jpg",
//         name: "nature"
//     },
// ]

// let imageWrapper = document.querySelector(".imageWrapper");
// let navbar = document.querySelector(".navbarItems");

// function navbarShow(data){
//     data.forEach((item)=>{
//        let items = `<li onClick="showRelatedItems('${item}')">${item.slice(0,1).toUpperCase()+item.slice(1).toLowerCase()}</li>`;
//        navbar.innerHTML +=items


//     })
// }
// navbarShow(navbarItems)

// function showRelatedItems(data){
//     console.log(data);
//     let filteredData = imagesData.filter((d)=> d.name === data);
//     console.log(filteredData);
//     if(filteredData.length === 0) {
//         filteredData = imagesData
//     }
//     showImage(filteredData)
    
    
// }

// function showImage(data){
//     console.log(data);
//     imageWrapper.innerHTML = ""
//     let  dataImgs = ""
//     data.forEach(element => {
//      dataImgs = `
//         <div class="imageWrapperCon">
//         <img class="imgSrc" src="${element.image}" alt="${element.name}">
        
//         </div>`
//         imageWrapper.innerHTML += dataImgs
//     });
// };

// showImage(imagesData);
// const imagesData = [
//     {
//         id: 1,
//         image: "./images/animal.jpg",
//         type: "animal"
//     },
//     {
//         id: 2,
//         image: "./images/animal2.jpg",
//         type: "animal"
//     },
//     {
//         id: 3,
//         image: "./images/bird.jpg",
//         type: "bird"
//     },
//     {
//         id: 4,
//         image: "./images/bird2.jpg",
//         type: "bird"
//     },
//     {
//         id: 5,
//         image: "./images/nature.jpg",
//         type: "nature"
//     },
//     {
//         id: 6,
//         image: "./images/nature2.jpg",
//         type: "nature"
//     },
// ]
// const listItems = ["all","bird","animal","nature"]
// const navbarItemsList = document.querySelector(".navbarItems");
// let imageWrapper = document.querySelector(".imageWrapper");


// function navbarFunc(data){
//     data.forEach(element => {
//        let items = `<li onclick="handleClick('${element}')">${element.substring(0,1).toUpperCase()+element.substring(1).toLowerCase()}</li>`  
//        navbarItemsList.innerHTML += items
//     });
    
// }
// navbarFunc(listItems);

// function handleClick(n){
//    let filteredData = imagesData.filter((val)=> val.type === n);
//    if(filteredData.length === 0){
//     filteredData = imagesData
//    }
   
//    renderData(filteredData)
   
    
// }

// function renderData(data){
//     imageWrapper.innerHTML = "";
//    data.forEach((d)=>{
//     let imgsRender = `
//     <div class="imageWrapperCon">
//     <img class="imgSrc" src="${d.image}" alt="${d.name}">
//     </div>
//     `;
//     imageWrapper.innerHTML +=imgsRender

//    })
// }
// renderData(imagesData);

// const btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//    const num = Math.floor(Math.random() * 900000);
//    document.body.style.backgroundColor = `#${num}`
//    btn.innerText = `Hex Code #${num}`
//    console.log(num);
   
   
// })


// function removeDuplicates(arr){
//     let index = 0;
//     while( index < arr.length){
//       if(arr[index] === 8){
//         arr.splice(index, 1)
//       }
//       index++
      
//     }
//     return arr
// }
// console.log(removeDuplicates([5, 6, 7, 7, 8, 8,8, 8,8, 9]));
// function removeDuplicates(arr) {
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// }

// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 8, 8, 8, 9,9,9,9]));


// function removeDuplicates(arr) {
//    let uniqueVal = [];

//    for(let i = 0; i < arr.length; i++){
//     if(!uniqueVal.includes(arr[i])){
//       uniqueVal.push(arr[i])
//     }
//    }
//    return uniqueVal;
// }

// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 8, 8, 8, 9,9,9,9, 9, 9, 9, 9, 9,]));

// function isEmptyObject(obj){
//       if(Object.keys(obj).length === 0){
//         return false
//       }else{
//         return true
//       }
// }
// console.log(isEmptyObject({"name": "umair"}));
// function isEmptyObject(obj){
//   if(JSON.stringify(obj)=== "{}"){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(isEmptyObject({"name": "umair"}));
// console.log(isEmptyObject({}));
// function isEmptyObject(obj){
//   let check = true
//    for(let key in obj){
//      if(obj.hasOwnProperty(key)){
//         check = false
//      }
//      break
//    }
//    return check
// }
// console.log(isEmptyObject({"name": "umair"}));
// console.log(isEmptyObject({}));


// function isInclude(arr){
//  const val = arr.filter(element => {
// //    if(element.charAt(0) === "u" || element.charAt(0) === "n"){
// //     return element
// //    }
//       if(element.indexOf("u") || element.indexOf("n")){
//         return element
//       }
//     // if(element.charAt(0) === "n" && element.charAt(0) === "u"){
//     //     return element
//     // }
//   });
//   console.log(val);
  
// }
// console.log(isInclude(["sami","umair","saad","farooq","apple","noman"]));

// function filterEvenNumbers(numbers) {
//     return numbers.filter(num => num % 2 === 0);
// }

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(nums));

// function greet(name) {
//     var message = "Hello, " + name + "!";
//     return message;
// }

// console.log(greet("Umair"));
// const user = {
//     name: "John",
//     age: 30,
// };

// console.log(user["age"]);
// console.log(user.age);
// console.log(user['gender'] = "male");

// for (var i = 0; i < 5; i++) {
//     function a(val) {
//         setTimeout(() => {
//             console.log(val);
//         }, 1000);
//     }
//     a(i)
   
// }

// function add(a, b) {
//     return a + b;
// }

// const result = add(5, 10);
// console.log(result);

//Problem 1: Duplicate Entries

// const userSchema = new mongoose.Schema({
//     name: String,
//     email:{
//         type: String,
//         required: true,
//         unique: true
//     }

// });

// //Problem 2: Data Validation

// const userSchema = new mongoose.Schema({
//     name: String,
//     age:{
//         type: Number,
//         min: 0
//     }
// });

// //Problem 3: Nested Documents

// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
//     comments: ["user1","userId2","userId3"],
// });

// //Problem 4: Relationship Between Collections

// const userSchema = new mongoose.Schema({
//     name: String,
//     posts:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//     }]
// });

// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
//     author: String,
// });

// //Problem 5: Date Fields
// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// }, 
// {
//     timeStamps: true
// });

// function objToArr(obj){
//    const vl = Object.entries(obj)
//    console.log(vl);
   
// }
// console.log(objToArr({name: "Umair", age: 20}));

// function simplecal(a, b, c){
//    return (a * b * c)/100
// }
// console.log(simplecal(1000, 5, 3));

// function calculateDaysBetweenDays(d1,d2){
//    const cd1 = new Date(d1);
//    const cd2 = new Date(d2);
//    const h = Math.abs(cd2 - cd1)
//    const t = h /(1000 * 60 * 60 * 24)
//    console.log(t);
   
   



// }
// console.log(calculateDaysBetweenDays("2024-01-01","2024-01-31"));

// function calculateAge(db){
//    const age = new Date(db);
//    const curdate = new Date();
//    const d = curdate.getFullYear() - age.getFullYear()
//   console.log(d);
  
// }
// console.log(calculateAge("1989-05-15"));


// function generateBarChart(arr){
//    let obj = {};
//    for(let i = 0; i < arr.length ; i++){
//       for(let j = 0; j < arr[i]; j++){
//         if(obj.hasOwnProperty(arr[i])){
//          obj[arr[i]] += "*"
//         }else{
//          obj[arr[i]] = "*"
//         }
        
//       }
//    }
//    console.log(obj);
//    return obj
   
// }
// console.log(generateBarChart([5, 3, 9, 2]));



// function validateCreditCard(num){
    
    
// if(typeof Number(num.indexOf(0)) === "number"){
//     let curDegit = ""
//        const cvrt = num.split(" ").join("").split("").reverse();
//        const an = cvrt.map((v, ind)=>{
//         if(ind % 2 !== 0){
//             v = v * 2
//             if(v > 9){
//               v= v - 9
               
//             }else{
//              v = v
//             }
//         }
//         return v
//        });
//        console.log(an);
       
//     //  const add = an.reduce((acc, cur)=> acc + cur, 0);
     
    
//     //  if(add % 10){
//     //     return true
//     //  }else{
//     //     return false
//     //  }
    
    
       
       

//      }

// }
// console.log(validateCreditCard("4539 1488 0343 6467"));
// console.log(validateCreditCard("8273 1232 7352 0569"));

// function paginate(arr, page, pageSize) {
//   const totalItems = arr.length;
//   const totalPages = Math.ceil(totalItems / pageSize);

//   // Ensure the page is within valid range
//   if (page < 1 || page > totalPages) {
//     return {
//       page: page,
//       totalPages: totalPages,
//       items: []
//     };
//   }

//   const startIndex = (page - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, totalItems);
//   const items = arr.slice(startIndex, endIndex);

//   return {
//     page: page,
//     totalPages: totalPages,
//     items: items
//   };
// }

// // Test karein
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// console.log(paginate(data, 1, 10)); // Page 1
// console.log(paginate(data, 2, 10)); // Page 2
// console.log(paginate(data, 3, 10)); // Page 3
// console.log(paginate(data, 4, 10)); // Page 4
// console.log(paginate(data, 5, 10)); // Page 5
// console.log(paginate(data, 6, 10)); // Page 6 (khaali array)


// function paginate(arr, page, pageSize) {
//   const totalItems = arr.length;
//   const totalPages = Math.ceil(totalItems / pageSize);

//   // Ensure the page is within valid range
//   if (page < 1 || page > totalPages) {
//     return {
//       page: page,
//       totalPages: totalPages,
//       items: []
//     };
//   }

//   const startIndex = (page - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, totalItems);
//   const items = arr.slice(startIndex, endIndex);

//   return {
//     page: page,
//     totalPages: totalPages,
//     items: items
//   };
// }

// // Test karein
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// console.log(paginate(data, 1, 10)); // Page 1

// function isInclude(arr){
//    const val = arr.filter(element => {
//      if(element.charAt(0) === "u" || element.charAt(0) === "n"){
//       return element
//      }
//         if(element.indexOf("u") || element.indexOf("n")){
//           return element
//         }
//       if(element.charAt(0) === "n" && element.charAt(0) === "u"){
//           return element
//       }
//     });
//     console.log(val);
    
//   }
//   console.log(isInclude(["sami","umair","saad","farooq","apple","noman"]));


//Check the number the number is applicable for multiplication or not

// function multiplication(num1, num2){
//   const answer = [];
//    for(let i = num1; i <= num2; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       answer.push('Fizzbuzz')
//     }
//     else if(i % 5 === 0){
//       answer.push("Buzz")
//     }
//     else if(i % 3 === 0){
//       answer.push('Fizz')
//     }
//     else{
//       answer.push(i)
//     }
    
//    }
//    return answer
// }
// console.log(multiplication(1,15));

// function multiplication(num1, num2){
//   const answer = [];
//    for(let i = num1; i <= num2; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       answer.push('Fizzbuzz')
//     }
//     else if(i % 5 === 0){
//       answer.push("Buzz")
//     }
//     else if(i % 3 === 0){
//       answer.push('Fizz')
//     }
//     else{
//       answer.push(i)
//     }
    
//    }
//    return answer
// }
// console.log(multiplication(1,15));


// function simplecal(a, b, c){
//    return (a * b * c)/100
// }
// console.log(simplecal(1000, 5, 3));

// function calculateDaysBetweenDays(d1,d2){
//    const cd1 = new Date(d1);
//    const cd2 = new Date(d2);
//    const h = Math.abs(cd2 - cd1)
//    const t = h /(1000 * 60 * 60 * 24)
//    console.log(t);
   
   



// }

// const validateNumber = (num)=>{
//   return /^[6-9][\d]{9}$/.test(num)
// }
// console.log(validateNumber('9876456778'));

// const validateNumber = (num)=>{
//   return /^(?:\+92|0)?(3[0-9]{2})[0-9]{7}$/.test(num)
// }
// console.log(validateNumber('+923001234567'));


// function extractNumber(num){
//    const val = num.split("");
//    const h = val.filter((v)=> Number(v)).map((v)=> Number(v));
//    return h
   
   
   
// }

// console.log(extractNumber("gagha56788kkj45"));

// function extractNumber(num){
//   let val = num.split("");
//   const numbers = [];
//   for(let i = 0; i <= val.length; i++){
//     if(Number(val[i])){
//       numbers.push(Number(val[i]))
//     }
    
//   }
  
//   return numbers
  
// }

// console.log(extractNumber("gagha56788kkj45"));


// if(typeof Number(num.indexOf(0)) === "number"){
//     let curDegit = ""
//        const cvrt = num.split(" ").join("").split("").reverse();
//        const an = cvrt.map((v, ind)=>{
//         if(ind % 2 !== 0){
//             v = v * 2
//             if(v > 9){
//               v= v - 9
               
//             }else{
//              v = v
//             }
//         }
//         return v
//        });
//        console.log(an);
       
//     //  const add = an.reduce((acc, cur)=> acc + cur, 0);
     
    
//     //  if(add % 10){
//     //     return true
//     //  }else{
//     //     return false
//     //  }
    
    
       
       

//      }

// }
// console.log(validateCreditCard("4539 1488 0343 6467"));
// console.log(validateCreditCard("8273 1232 7352 0569"));

// function paginate(arr, page, pageSize) {
//   const totalItems = arr.length;
//   const totalPages = Math.ceil(totalItems / pageSize);

//   // Ensure the page is within valid range
//   if (page < 1 || page > totalPages) {
//     return {
//       page: page,
//       totalPages: totalPages,
//       items: []
//     };
//   }

//   const startIndex = (page - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, totalItems);
//   const items = arr.slice(startIndex, endIndex);

//   return {
//     page: page,
//     totalPages: totalPages,
//     items: items
//   };
// }

// //Problem 3: Nested Documents

// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
//     comments: ["user1","userId2","userId3"],
// });

// //Problem 4: Relationship Between Collections

// const userSchema = new mongoose.Schema({
//     name: String,
//     posts:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//     }]
// });

// //Problem 3: Nested Documents

// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
//     comments: ["user1","userId2","userId3"],
// });

// //Problem 4: Relationship Between Collections

// const userSchema = new mongoose.Schema({
//     name: String,
//     posts:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//     }]
// });


// const obj = {
//   name: "Umair",
//   age: 23
// }
// const obj2 = {...obj};
// obj2.name = "fahad"
// console.log("obj1", obj);
// console.log("obj2", obj2);

// const data = {
//   name : "Umair",
//   age: 23,
//   favourite:{
//     book: "Warrior",
//     sport: "Cricket"
//   }
// }

// const data2 = {
//   ...data,
//   favourite:{
//     ...data.favourite
//   }
// };

// data.age = 24;
// data.name = "Faiz"
// data.favourite.book = "Novel"
// console.log("data", data);
// console.log("dat2", data2);

// let data = {
//   name: "Umair",
//   age: 23,
//   favourites:{
//     book:"Drama",
//     sport:"Cricket"
//   },
//   hello: function(){
//     console.log("My name is " + this.name);
    
//   }
// }

// const data2 = JSON.parse(JSON.stringify(data));

// data2.name = "Kashif";
// data2.age = 24;
// data2.favourites.book = "Islamic";

// console.log("data", data);
// data.hello()
// console.log("data2", data2);

// var obj = {
//   foo: "Umair",
//   func: function(){
//     var self = this;
//     console.log("This.foo", this.foo);
//     console.log("self.foo", self.foo);
//     (function(){
//       console.log("this.foo", this.foo);
//       console.log("self.foo", self.foo);


      
//     })()
//   }
// }
// obj.func()

// const str = "Hello";

// const cvrt = Array.from(str);
// console.log(cvrt);

// const numbers = [1, 2, 3];

// const arr = Array.from(numbers, (num)=> num * 2);
// console.log(arr);
// const arr2 = new Array(100)
// console.log(arr2);

// const nums =Array.from(arr2, (val, index)=>
// {
//   return index + 1
// }
// );
// console.log(nums);

// console.log([] == []);
// console.log({} == "");
// console.log({} == 0);
// console.log([] == 10);
// console.log([] + 1);
// console.log({});
// console.log(typeof []);

//Bind Method 

// Object.prototype.myBind = function (bindObj, ...arg){
//   bindObj.myMethod = this;
//   console.log("bindObj ->",bindObj);
//   return function (){
//     bindObj.myMethod(...arg)
//   }
// }

// let obj = {
//   name: "Umair",
//   sayHi:function(age, des, exp){
//     console.log('Hello ' + this.name + " " + age + " "+des + " " + exp);
    
//   }
// };

// let obj2 = {name: "Habib"};

// const hiFun = obj.sayHi.myBind(obj2, 20, "developer", "2years");
// hiFun()


// Object.prototype.myBind = function (bindObj, ...arg){
//   bindObj.kuchBhi = this;
//   return function (){
//     bindObj.kuchBhi(...arg)
//   }
// }


// let obj = {
//   name: "Faiz"
// }

// let obj2 = {
//   name: "Habib",
//   sayHi: function(age, desc){
//     console.log("hello my Friend " + this.name + age + desc);
    
//   }
// }

// let printObj = obj2.sayHi.myBind(obj, 23, "hello");
// printObj()

//Polyfill is made because of inavailabilty in older environment that is exist in new version which we set in old environment.


//Call Method
//call a function directly

// Object.prototype.myCall = function (callObj, ...arg){
//   callObj.myMethod = this;
//   function hello(){
//     callObj.myMethod(...arg)
//   }
//   return hello()
// }

// Object.prototype.myCall = function (callObj, ...arg){
//   callObj.myMethod = this;
//   return callObj.myMethod(...arg)
// }
// let obj = {
//   name: "Aamir",
//   sayHi:function(age, desc){
//     console.log("Hello "+ this.name + " " + age + " " + desc);
    
//   }
// }

// let obj2 = {name: "Kashif"};

// obj.sayHi.myCall(obj2, 26, "Accountant");


//Apply Method 

// Object.prototype.myApply = function (ObjApply,[...arg]){
//    ObjApply.myMethod = this;
//    ObjApply.myMethod(...arg)
// }
// let nameObj = {
//   name : 'Umair'
// }

// let printName = {
//   name : "Ahmed",
//   sayHi: function (...age){
//     console.log("Welcome " + this.name + " " + age[0] + " " + age[1] + " " + age[2]);
    
//   }
// }
// printName.sayHi.myApply(nameObj, [23, "Umair", "Developer"]);

// Object.prototype.myCall = function (callObj, ...arg){
//   callObj.kuchbhi = this
//   return function (){
//     callObj.kuchbhi(...arg)
//   }
// }

// let users = [
//   {
//     id: 1,
//     name: "Umair"
//   },
//   {
//     id: 2,
//     name: "Faiz"
//   },
//   {
//     id: 3,
//     name: "Kashif"
//   },

// ]

// function greet(greeting, age){
//   alert(`Hello ${this.name}! ${greeting} ${age}`)
// }

// const userHandler = ()=>{
//   console.log("Hello");
//   let checkUser = users.find((userHandler) => userHandler.id == 2);
//   console.log(checkUser);
//  const myBind = greet.myCall(checkUser,"Welcome to the page",24)
//  myBind()
 
  
  
// }

//Promise in JavaScript

const data = [
  {
    name: "umair"
  },
  {
    name: "umair"
  },
  {
    name: "umair"
  },
  {
    name: "umair"
  },
  

]
// function renderVal(users){
//   return users
// }
// const myPromise = new Promise(async(resolve, reject)=>{
  
//     const check = await renderVal(data);
//     return check
 
// })
// myPromise.then((resolve)=>{
//   console.log("hhh",resolve);
  
// }, (reject)=>{
//   console.log("rej",reject);
  
// })

const promiseBtn = document.getElementById("promiseBtn");

 function helloFunc(arg){
  const myPromise = new Promise((resolve, reject)=>{
     setTimeout(()=>{
      if(arg ==="res"){
       return  resolve("Resolve Hogiiya he!")
      }
       
      reject("Reject Hogiya he!")
     },1000)
  })

  

  return myPromise
}


promiseBtn.addEventListener("click", ()=>{
  console.log("h");
 const check =  helloFunc("rej");
 
 check.then((res)=>res).then((res)=>{
  console.log("resolved", res);
  
 }).catch((error)=>{
  console.log("Error", error);
  
 })
 
  
  
})



































































