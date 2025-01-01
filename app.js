

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

// const promiseBtn = document.getElementById("promiseBtn");

//  function helloFunc(arg){
//   const myPromise = new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//       if(arg ==="res"){
//        return  resolve("Resolve Hogiiya he!")
//       }

//       reject("Reject Hogiya he!")
//      },1000)
//   })



//   return myPromise
// }


// promiseBtn.addEventListener("click", ()=>{
//   console.log("h");
//  const check =  helloFunc("rej");

//  check.then((res)=>res).then((res)=>{
//   console.log("resolved", res);

//  }).catch((error)=>{
//   console.log("Error", error);

//  })



// })

// function User(name,age){
//   this.name = name;
//   this.age = age
// }
// const user1 =new User("Umair", 24);
// const user2 =new User("Faiz", 14);
// User.prototype.designation = "Developer"
// user1.name = "Hello"

// console.log(user1, user2);


// function hello1(){
//   return function hello2(name){
//     return name
//   }
// }
// console.log(hello1()("ali"));

// let arr = [["umair","habib","faiz"],["faiz","habib"]];
// let v = arr[0]
// console.log(v[1]);

// function LevelTwo() {
//   console.log("Inside Level Two!")
// }

// function LevelOne() {
//   console.log("LevelOne");

//   LevelTwo()
// }

// function main() {
//   console.log("Main");

//   LevelOne()
// }

// main()

// function hello2(callback){
//   setTimeout(()=>{
//     const data = {name:"Umair", age:24}
//     callback(data)
//   },1000)
// }

// function displayData(data){
//   console.log(`Fetched Data: ID = ${data.age}, Name = ${data.name}`);

// }

// hello2(displayData)

// const inputVal = document.getElementById("inputVal");
// const submitBtn = document.getElementById("submitBtn");
// let timeOut;
// function showData(e) {
//    clearTimeout(timeOut)
//    timeOut= setTimeout(()=>{
//       console.log(e.target.value);

//     },1000)
//     console.log(timeOut);


// }

// inputVal.addEventListener("input", showData)


// const obj = {
//   name:"Umair",
//   age: 24,
//   designation:"Developer",
//   interests: "Programming"
// }
// const hello = Object.valueOf(obj)

// console.log(hello)
// console.log(obj);

// const Person = function (firstName, lastName, age, eyeColor) {
//   this.name = firstName + " " + lastName;
//   this.age = age;
//   this.eyeColor = eyeColor;

//   this.sayHello = function (g) {
//     console.log(this.name);
//     return g
//   };
// };
// const obj2 = {
//   name: "Umair kakkakk",
//   age: 20,
//   eyeColor:"Dark"
// }
// let text = new Person("Umair", "Habib", 24, "Blue");
// const c= text.sayHello.bind(obj2)
// console.log(c("hey"));

// const arr = [1, 2, 3, function(){
//   console.log("Hello world");

// }, "umair"]

// console.log(arr[3]());


// const arr = [1, 2, 3, function(){
//   console.log("Hello world");

// }, "umair"]

// console.log(arr[3]());

// const Person = function (firstName, lastName, age, eyeColor) {
//   this.name = firstName + " " + lastName;
//   this.age = age;
//   this.eyeColor = eyeColor;

//   this.sayHello = function (g) {
//     console.log(this.name);
//     return g
//   };
// };
// const obj2 = {
//   name: "Umair kakkakk",
//   age: 20,
//   eyeColor:"Dark"
// }
// let text = new Person("Umair", "Habib", 24, "Blue");
// const c= text.sayHello.bind(obj2)
// console.log(c("hey"));


// const arr = [1, 2, 3, function(){
//   console.log("Hello world");

// }, "umair"]

// console.log(arr[3]());

// const Person = function (firstName, lastName, age, eyeColor) {
//   this.name = firstName + " " + lastName;
//   this.age = age;
//   this.eyeColor = eyeColor;

//   this.sayHello = function (g) {
//     console.log(this.name);
//     return g
//   };
// };
// const obj2 = {
//   name: "Umair kakkakk",
//   age: 20,
//   eyeColor:"Dark"
// }
// let text = new Person("Umair", "Habib", 24, "Blue");
// const c= text.sayHello.bind(obj2)
// console.log(c("hey"));


// let lastClickedIndex = -1; // Pichle clicked box ka index

// listItems.forEach((item, ind) => {
//   item.style.backgroundColor = colors[ind];

//   item.addEventListener("click", () => {
//     // Agar ye pehli baar click hai
//     if (lastClickedIndex === -1) {
//       lastClickedIndex = ind; // Ab is index ko store karo
//       return; // Kuch nahi karna, function khatam
//     }

//     // Pichle clicked box ka color naye box ko de do
//     const previousItem = listItems[lastClickedIndex];
//     const currentColor = previousItem.style.backgroundColor;

//     // Naye box ka background color pichle box ka color
//     previousItem.style.backgroundColor = colors[ind];
//     item.style.backgroundColor = currentColor;

//     // Ab naye clicked index ko store karo
//     lastClickedIndex = ind;
//   });
// });

// const colors = ["red", "green", "blue","yellow","gray","black"];

// const listItems = document.querySelectorAll("li");
// let listCount = -1;
// listItems.forEach((item, index)=>{
//   item.style.backgroundColor = colors[index]
//   item.addEventListener('click', (e)=>{
//    if(listCount === -1){
//     listCount = index;
//     return
//    }

//    console.log(listCount);
//    const previousItem = listItems[listCount];
//    console.log(previousItem);
//    const currentColor = previousItem.style.backgroundColor;
//    previousItem.style.backgroundColor = colors[index];

//    item.style.backgroundColor = currentColor
//    listCount = index



//   })
// })

// function howManyChar(str){
//   const cvrtArr = str.split("");
//   const mapval = cvrtArr.map((val, ind)=>{
//     if(val == " "){
//       return 
//     }
//     return val
//   }).filter((val)=> val !== undefined);

//   let countVal = {};
//   mapval.reduce((acc, cur)=>{
//      if(countVal.hasOwnProperty(cur)){
//        countVal[cur] += 1
//      }else{
//        countVal[cur] = 1
//      }
//   },0)
//   console.log(countVal);
//   return countVal



// }
// console.log(howManyChar("Habib kahan ho tum aaj kl nazar nhi arha he"));

//const hello = "habib";
// const {habib} = hello;
// console.log();

// name2 = "Umair"

// const {name}= {
//   name: "Umair"
// }
// const []= [1,2,3,4]

// console.log(length);//
// console.log(name);//
// console.log(age);//

// function hello(str){
//  try {
//   if(str == "hell"){
//     return str + " Hello world"
//   }
//  } catch (error) {

//  }
// }
// // console.log(hello("ka"));

// function hello(){
//   {
//     (function(){

//       var x = 10;
//       var y = 12;
//     })()
//   }
//   console.log(x, y);

// }
// hello()

// let ulList = document.querySelector(".ulList");
// const inputTag = document.querySelector("input")
// const submitBtn = document.querySelector("#submitBtn")
// let currentEditItem = null
// function addText(){
//    console.log(inputTag.value);
//    let lists = `<li>${inputTag.value}<button onclick="editHandler(this)">Edit</button><button onclick="deleteHandler(this)">Delete</button></li>`;
//    ulList.innerHTML += lists
//    inputTag.value = ""

// }

// function editHandler(d){
//   currentEditItem = d.parentElement
//   console.log(d.parentElement.firstChild.nodeValue);
//   inputTag.value = d.parentElement.firstChild.nodeValue;
//   submitBtn.setAttribute('onclick',`editValueHandler()`)

// }
// function deleteHandler(d){
//   d.parentElement.remove()

// };

// function editValueHandler(d){
//   console.log(d);
//   console.log(currentEditItem);
//   if(currentEditItem){
//     currentEditItem.firstChild.nodeValue = inputTag.value;
//     submitBtn.setAttribute('onclick',"addText()");
//     currentEditItem = null
//     inputTag.value =""
//   }



// }

// let arr = [["hello"]];
// let arr2 = arr[0][0];
// console.log(arr2.charAt(arr2.length -1));

// async function hello1(){
//   setTimeout(() => {
//     console.log("hello world");

//   }, 0);


//   console.log("hello");




// }
// hello1();


// db.products.aggregate([
//   {
//     $match:{
//       price:{
//         $gt: 1200
//       }
//     }
//   },
//   {
//     $unwind:"$colors"
//   },
//   {
//     $group:{
//       _id:{
//         priceGroup:"$price"
//       },
//       allColors:{
//         $addToSet:"$colors"
//       }
//     }
//   },
//   {
//     $project:{
//       _id: 1,
//       allColors: 1,
//       colorLength:{$size: "$allColors"}
//     }
//   }
// ]);


// db.col.aggregate([
//   {
//     $project:{
//       name: 1,
//       _id: 0,
//       umairValue:{
//         $filter:{
//           input:"$values",
//           as: "val",
//           cond: {
//             $gt:["$$val", 30]
//           }
//         }
//       }
//     }
//   }
// ]);


// let obj = {
//   name:{
//     firstname:"Umair",
//     lastName:"Ahmed"
//   }
// };

// let obj2 = structuredClone(obj);
// obj2.name.firstname = "Habib";

// console.log(obj);
// console.log(obj2);
// let obj = {
//   name:{
//     firstname:"Umair",
//     lastName:"Ahmed"
//   }
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name.firstname = "Habib";

// console.log(obj);
// console.log(obj2);

// const obj = {
//   name: "Umair ",
//   age: 23
// }
// let counter = 0
// function createCount(num){
//   return function(){
//     //counter++
//     return num + counter++
//   }
// };
// const val = createCount(10)
// console.log(val());
// console.log(val());
// console.log(val());
// console.log(val());
// console.log(val());
// console.log(val());
// console.log(val());

// var expect = function(val) {
//   return {
//    toBe:function(n){
//        if(val ===n ){
//            return true
//        }
//        throw new Error("Not Equal")
//    },
//    notToBe:function(n){
//        if(val !==n ){
//           return true
//        }
//        throw new Error("Equal")
//    }
//   }
// };

// console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal";

// var createCounter = function(init) {
//   let count = init
//   return {
//     increment: function(){
//       count++
//        return count
//     },
//     reset:function(){
//       count = init
//       return count
//     },
//     decrement:function(){
//       count--
//       return count
//     },
//   }

// };


//  const counter = createCounter(5)
//  console.log(counter.increment()); // 6
//  console.log(counter.reset()); // 5
//  console.log(counter.decrement()); // 4


// function helloFunc(val){

//   return val + 1
// }

// var map = function(arr, fn) {
//     let returnedArray = [];
//       for(let i = 0; i < arr.length; i++){
//        returnedArray[i] = fn(arr[i], i)
//       }
//       return returnedArray

// };

// console.log(map([1, 2, 3], helloFunc));

// function callBackFunc(i){
//   console.log(i);

//    return i === 0;
// }
/**
 * Takes an array and a callback function, 
 * Applies the callback function to each element of the array, 
 * If the callback function returns true, the element is included in the new array, 
 * otherwise it is excluded
 //@param  {Array} arr The array to be filtered
 */// @param  {Function} fn The callback function to be applied to each element
 // @return {Array} The filtered array
//  */
// var filter = function(arr, fn) {

//   let filteredVal = []
//     for(let i = 0; i < arr.length; i++){
//        if(fn(i) === true){
//          filteredVal.push(arr[i])
//        }
//     }
//     return filteredVal
// };
// console.log(filter([1, 2, 3], callBackFunc));

// function reduceCallback(accum, curr){
//   return accum + curr
// }

// var reduce = function(nums, fn, init) {
//   let val = init
//      for(let i =0; i< nums.length; i++){


//        val = fn(val, nums[i])
//      }
//   return val
// };
// console.log(reduce([1, 2, 3, 4], reduceCallback, 0));

// var compose = function(functions) {
//   return function(x) {

//    let val = functions.reduceRight((acc,fn)=> fn(acc),x)
//    return val


//   }
// };

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9

// const arr = [1, 2, 3, 4, 5, 6];
// const val =arr.reduceRight((acc, curr)=> {
//  if(curr == 5){
//   curr = 20
//  }
//  return acc + curr

// }, 0);
// console.log(val);

// var compose = function(functions) {
//   return function(x) {
//     let val = x
//   for(let i = functions.length -1; i >= 0; i--){
//      val = functions[i](val)
//   }
//   return val


//   }
// };

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9

// var argumentsLength = function(...args) {
//   console.log(...args);

//     return args.length
// };


// console.log(argumentsLength(1, 2, 3)); // 3

// var once = function(fn) {
//     let calledVal = false;
//     let result;
//   return function(...args){
//    if(!calledVal){
//     result = fn(...args)
//     calledVal = true
//     return result
//    }
//    result = undefined
//    return result
//   }
// };

//  let fn = (a,b,c) => (a + b + c)
//  let onceFn = once(fn)
// console.log(onceFn(1,2,3)); // 6

// console.log(onceFn(2,3,6)); // returns undefined without calling fn

// function memoize(fn) {
//   let memo = {}

//   return function(...args) {
//     let key = JSON.stringify(args)

//     if(!memo[key]){
//       memo[key] = fn(...args)
//     }
//     return memo[key]


//   }
// }



// let callCount = 0;
//  const memoizedFn = memoize(function (a, b) {
// 	 callCount += 1;
//    return a + b;
//  })
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(memoizedFn(2, 3)) // 5

//  console.log(callCount) // 1 

// const addToNum = (x)=> x + 10;
// const multiplyNum = (a)=> a * 5;

// const composite = (g, f)=> (x)=> g(f(x));
// const final = composite(addToNum, multiplyNum)

// console.log(final(10));
// let count = 0;
// const fn =(a,b)=>{
//   count += 1
//   return a * b
// }
// function outerFunc(fn){
//   let val = false

//   return function (...args){
//      if(!val){
//       val = true
//       return fn(...args)
//      }

//      return undefined
//   }
// }

// const result = outerFunc(fn);
// console.log(result(2,4));
// console.log(result(2,4));
// console.log(result(2,4));
// console.log(result(2,4));


// console.log(count);

// let count = 0;
// const fn =(a,b)=>{
//   count += 1
//   return a * b
// }
// function outerFunc(fn){
//   let val = {};

//   return function (...args){
//     let key = JSON.stringify(args);
//     console.log(key);

//      if(!val[key]){
//       val[key] = fn(...args)
//       return val
//      }

//      return undefined
//   }
// }

// const result = outerFunc(fn);
// console.log(result(2,4));
// console.log(result(2,4));
// console.log(result(2,4));
// console.log(result(2,20));
// console.log(result(2,30));



// console.log(count);


// const addTwoPromises = async (promise1, promise2)=>{
//   let p1 =await  promise1.then((val)=> val);
//   let p2 =await  promise2.then((val)=> val);
//  return new Promise((resolve, reject)=>{
//      resolve(p1 + p2)
//   })
// }
// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//  .then(console.log); 

// async function sleep(millis) {
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         resolve()
//       }, millis)
//     })

// }

// let t = Date.now()
// sleep(1000).then(() => console.log(Date.now() - t)) // 100
// console.log(Date.now()- Date.now());



// async function run() {
//   let t = Date.now();
//   const result = await sleep(1000);
//   console.log("result", result);


//   console.log("inner",Date.now() - t);



// }
// run()


// db.products.aggregate([
//   {
//     $project:{
//       _id:0,
//       name:1,
//       price:1
//     }
//   }
// ])

// function memoize(fn){
//    let memo = {}

//    return function (...args){
//     let key = JSON.stringify(args);
//     if(!memo[key]){
//       memo[key] = fn(...args)
//     }
//     return memo[key]
//    }
// }


// var cancellable = function(fn, args, t) {
//   let timer =setTimeout(()=>{
//     fn(...args); 
//      },t)
//   return function cancelFn(){

//    clearTimeout(timer)
//   }
// };


//  const result = [];

//  const fn = (x) => x * 5;
//  const args = [2], t = 20, cancelTimeMs = 50;

//   const start = performance.now();

//   const log = (...argsArr) => {
//       const diff = Math.floor(performance.now() - start);
//       result.push({"time": diff, "returned": fn(...argsArr)});
//   }

//   const cancel = cancellable(log, args, t);
//   console.log(cancel);


//   const maxT = Math.max(t, cancelTimeMs);

//   setTimeout(cancel, cancelTimeMs);

//   setTimeout(() => {
//       console.log("result",result); // [{"time":20,"returned":10}]
//   }, maxT + 15)


// var cancellable = function(fn, args, t) {
//   function imdFunc(){
//     fn(...args)
//   }
//   imdFunc();
//   let interval = setInterval(()=>{
//     imdFunc()
//   }, t)
//   return function cancelFn(){
//     clearInterval(interval)
//   }

// };


//  const result = [];
//   const fn = (x) => x * 2;
//  const args = [4], t = 35, cancelTimeMs = 190;
//   const start = performance.now();
//   const log = (...argsArr) => {
//      const diff = Math.floor(performance.now() - start);
//      result.push({"time": diff, "returned": fn(...argsArr)});
//  }

//  const cancel = cancellable(log, args, t);
//   setTimeout(cancel, cancelTimeMs);

//  setTimeout(() => {
//      console.log(result); // [
//                           //     {"time":0,"returned":8},
//                           //     {"time":35,"returned":8},
//                           //     {"time":70,"returned":8},
//                           //     {"time":105,"returned":8},
//                           //     {"time":140,"returned":8},
//                           //     {"time":175,"returned":8}
//                           // ]
//  }, cancelTimeMs + t + 15)   


// var timeLimit = function(fn, t) {
//     let newTime = Date.now()
//   return async function(...args) {
//    return new Promise((resolve, reject)=>{
//     let timer = setTimeout(()=>{
//       reject("Time Limit Exceeded")
//     }, t)


//    })
//   }
// };


// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).then((res)=>{
//   console.log(res);

// }).catch((error)=>{
//   console.log(error)

//}) // "Time Limit Exceeded" at t=100ms

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//    this.cache = {};

//    const currentTime = Date.now();
//    let isExistingKey = false;
//    if(this.cache[key] && this.cache[key].expiryTime > currentTime){
//     isExistingKey = true;
//    }

//    this.cache[key] = {
//     count: value,
//     expiryTime: currentTime + duration
//    }
//   return isExistingKey

// };
// TimeLimitedCache.prototype.get = function(key) {
//     const currentTime = Date.now();
//     if(this.cache[key] && this.cache[key].expiryTime > currentTime){
//       return this.cache[key].value
//     }
//     return -1
// };
// TimeLimitedCache.prototype.count = function() {
//     let currentTime = Date.now();
//     let validateCount = 0
//     for (let key in this.cache) {
//       if (this.cache[key].expiryTime > currentTime) {
//           validateCount++
//       }
//   }
//   return validateCount

// };

// class TimeLimitedCache{
//   constructor(key, value, duration){
//     let cache = {};
//     this.cache = cache;

//     const currentTime = Date.now();
//     if(cache[key] && cache[key].expiryTime > currentTime){
//       return cache[key]
//     }
//     cache[key] = {
//       count: value,
//       expiryTime: currentTime + duration
//     }

//   }

//   greet(key){
//     const currentTime = Date.now();
//     console.log(this.cache)
//     if(this.cache[key] && this.cache[key].expiryTime > currentTime){
//       return this.cache[key].count
//     }
//     return -1
//   }
//   countVal(){
//     let currentTime = Date.now();
//     let validateCount = 0
//     for (let key in this.cache) {
//       if (this.cache[key].expiryTime > currentTime) {
//           validateCount++
//       }
//   }
//   return validateCount
//   }

// }

// const timelimit = new TimeLimitedCache(1, 42, 1000);

// console.log(timelimit.countVal());

// const inputVal = document.getElementById("inputVal");

// const debounceHandler = (func, delay)=>{
//  console.log(func, delay);
//  let timer;
//  return function(e){
//    clearTimeout(timer)
//    timer = setTimeout(()=>{
//     func(e)
//    }, delay)
//  }


// }

// const hanledebounce = debounceHandler(function(e){
//   console.log(e.target.value);

// }, 500)


// inputVal.addEventListener("input", hanledebounce)


// var promiseAll = function(functions) {
//   let results = [];
//   let completed = 0;
//   let hasError = false;

//   return new Promise((resolve, reject)=>{
//     functions.forEach((element, index) => {
//       element().then((res)=>{
//         results[index] = res
//         completed++
//         if(completed === functions.length){
//           resolve(results)
//         }

//       }).catch((error)=>{
//         if(!hasError){
//           hasError = true;
//           reject(error)
//         }
//       })

//     });
//   })
// };

// const promise = promiseAll([() => new Promise(res => res(42))])
// promise.then(console.log); // [42]

// var chunk = function(arr, size) {

//     let result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result


// };
// console.log(chunk([1,2,3,4,5,6], 2));

// Array.prototype.last = function(arguments) {
//     let val = JSON.stringify(this)
//    if(val === "[]"){
//     return -1
//    }
//     return this[this.length -1];


// };

//  const arr = [1, 2, 3];
//  ; // 3
//  console.log(arr.last());

// Array.prototype.groupBy = function(fn) {

// let obj = {};
//    this.forEach((item)=>{
//     let key = fn(item);
//     console.log(key);
//     if(!obj[key]){
//       obj[key] = [item]
//     }else{

//     obj[key].push(item)
//     }


//    })

//    return obj




//   };

// const val =[1,1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
//  console.log(val);

// function checkNum(delay){
//   let time = [];
//   let timer;
//   if(!time.includes(delay)){
//     time.push(delay)
//     timer = setTimeout(()=>{
//       console.log(delay);
//     }, delay)
//   }

// }
// checkNum(1000)
// checkNum(1000)

// function helloFunc(a){
//  // console.log(a);
//   return a

// }

// var sortBy = function(arr, fn) {
//   let n = arr.length;

//   for(let i = 0; i < n; i++){
//     console.log("outer",arr[i]);
//     for(let j = 0; j <= n - i -1; j++){

//       if(arr[j] > arr[j + 1]){
//       let temp = arr[j]

//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }

//     }
//   }

//   fn(arr)



// };
// sortBy([5, 4, 1, 2, 3], (a)=> a)

//var join = function(arr1, arr2) {

//   let data = arr1.concat(arr2).sort((a, b)=> a.id - b.id);
//   let data3 = data.reduce((acc, cur)=>{
//       let existing = acc.find(item => item.id === cur.id);
//       if(existing){
//         Object.assign(existing, cur)
//       }else{
//         acc.push({...cur})
//       }
//       return acc
//   },[]);


//   return data3











// };
// join([{id: 20, name: "umair"}],[{id: 2, name: "faiz"},{id: 3, name: "sami"},{id: 3, name: "kahan"}])

//var join = function(arr1, arr2) {
// let data = arr1.concat(arr2).sort((a, b)=> a.id - b.id);
//  let resultObj = {}
//  for(let d of data){
//   let id = d.id
//   if(resultObj[id]){
//     resultObj[id] = {...resultObj[id], ...d}
//   }else{
//     resultObj[id] = d
//   }


//  }
//  let finalData = Object.values(resultObj);
//  return finalData

// var flat = function (arr, n) {
//   let result = []

//   arr.forEach(element => {
//     if(Array.isArray(element) && n > 0){
//       console.log(result);


//       result = result.concat(flat(element, n-1))

//     }else{
//       result.push(element)
//     }

//   });


//   return result;




// };
// console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));

// function coercionHandle(n){
//   if(n ===0){
//     return 1
//   }
//   return n * coercionHandle(n-1)//5*4*3*2*1
// }
// console.log(coercionHandle(5));


// function handleArray(arr, n){
//   console.log(arr);
//   let result = [];
//   arr.forEach(element => {
//     if(Array.isArray(element) && n > 0){
//    result = result.concat(handleArray(element, n-1))

//     }else{
//       result.push(element)
//     }
//   });
//   console.log(result);
//   return result

// }

// console.log(handleArray([1, 2, 3, [4, 5, 6, [7, 8]], 9 , 10], 2));

// var compactObject = function(obj) {
//     let result = []
//     let resultObj = {}
//     console.log(obj);



//     function hello(data){
//       if(Array.isArray(data)){

//         result = data.filter((value)=> typeof value === "number" && value);

//       }

//       else if(typeof data === 'object' && data !== null){
//         console.log(data);
//         for(let val in data){
//           console.log(data[val]);
//           if(!data[val]){
//             delete data[val]
//           }
//           else if(Array.isArray(data[val])){
//             console.log("arr", data[val]);
//             console.log("arrPro",val);

//            let heloo= data[val].map((val2)=>{
//               if(val2){
//                return val2
//               }
//               return

//             })
//             console.log(heloo);


//           }


//           console.log(data);
//         }


//       }

//     }
//     hello(obj)
//     console.log(result);
//     console.log(resultObj);


// };

// compactObject({"a": null, "b": [false, 1]})

// function join(arr1, arr2) {
//   let data = arr1.concat(arr2).sort((a, b)=> a.id - b.id);
//   let resultObj = {}
//   for(let d of data){
//    let id = d.id
//    if(resultObj[id]){
//      resultObj[id] = {...resultObj[id], ...d}
//    }else{
//      resultObj[id] = d
//    }


//   }
//   let finalData = Object.values(resultObj);
//   return finalData  
// }

// function join(arr1, arr2) {
//   let data = arr1.concat(arr2).sort((a, b)=> a.id - b.id);
//   let resultObj = {}
//   for(let d of data){
//    let id = d.id
//    if(resultObj[id]){
//      resultObj[id] = {...resultObj[id], ...d}
//    }else{
//      resultObj[id] = d
//    }


//   }
//   let finalData = Object.values(resultObj);
//   return finalData  
// }


// var compactObject = function (obj) {
//   let result = []



//   function hello(data) {
//     if (Array.isArray(data)) {

//       return data.map((value) => {
//         if (Array.isArray(value)) {
//           return hello(value)
//         }

//         return value
//       }).filter(val =>val || val ==="[]")


//     } else if (typeof data === 'object' && data !== null) {
//       let cleanedObj = {}
//       for (let key in data) {
//         const value = data[key];
//         if (value) {
//           if (Array.isArray(value)) {
//             const filteredArray = hello(value);
//             if (filteredArray.length > 0 && filteredArray === "[]") {
//               cleanedObj[key] = filteredArray;
//             }

//           }else if(typeof value === 'object' && value !== null){
//             const filteredObject = hello(value);
//             if (filteredObject.length > 0 && filteredObject === "{}") {
//               cleanedObj[key] = filteredObject;
//             }
//           }else{
//             cleanedObj[key] = value
//           }
//         }


//       }

//       return cleanedObj

//     }
//     return data
//   }
//     hello(obj)
//     return result

//   };
//   console.log(compactObject([null, 0, false, 1]))
//   console.log(compactObject({ "a": null, "b": [false, 1] }));
//   console.log(compactObject([null, 0, 5, [0], [false, 16]]));


// var compactObject = function(obj) {
//   let result = [];

  
//   function hello(data) {
//     if (Array.isArray(data)) {
//       return data.map(value => {
//         if (Array.isArray(value)) {
//           return hello(value); 
//         }
//         return value; 
//       }).filter(item =>item);
//     } else if (typeof data === 'object' && data) {
//       let cleanedObj = {};
//       for (let key in data) {
//         const value = data[key];

//         if (value) {
//           if (Array.isArray(value)) {
           
//             const filteredArray = hello(value);
//             if (filteredArray.length > 0 || filteredArray === "[]") {
//               cleanedObj[key] = filteredArray;
//             }
//           } else if (typeof value === 'object' && value !== null) {
            
//             const filteredObject = hello(value);
//             if (Object.keys(filteredObject).length > 0) {
//               cleanedObj[key] = filteredObject;
//             }
//           } else {
           
//             cleanedObj[key] = value;
//           }
//         }
//       }
//       return cleanedObj;
//     }
//     return data; 
//   }

//   result = hello(obj);
//   return result;
// };
// var compactObject = function(obj) {
  
//   function cleanData(data) {
//       if (Array.isArray(data)) {
//         console.log("data", data);
        
         
//           const cleanedArray = data.map(item => cleanData(item)).filter(item => item);

         
//           return cleanedArray.length === 0 ? null : cleanedArray;
//       } 
     
//       else if (typeof data === 'object' && data !== null) {
//           let cleanedObj = {}; 

          
//           for (let key in data) {
//               const value = data[key];

             
//               const cleanedValue = cleanData(value);
//               console.log("cleanedValue", cleanedValue);
              

             
//               if (cleanedValue) {
//                   cleanedObj[key] = cleanedValue;
//               }
//           }

//           return Object.keys(cleanedObj).length > 0 ? cleanedObj : null;
//       }

//       return data;
//   }

//   return cleanData(obj);
// };

// // Example Test Case
// console.log(compactObject([null, 0, false, 1]));
// console.log(compactObject({"a": null, "b": [false, 1]}))
// console.log(compactObject([null, 0, 5, [0], [false, 16]])); 
// console.log(compactObject({"a": 1, "b": 1, "c": null, "d": "false", "e": 0}));


//Chunk Array 

// function arrChunk(arr, size){
//   let arr2 = [];
//   for(let i = 0; i < arr.length; i+= size){
//     console.log(arr[i], i);
    
//     arr2.push(arr.slice(i, i + size))
//   }
//   return arr2
// }
// console.log(arrChunk([1, 2, 3, 4, 5], 2));

// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }
    
//   /*
//    * @param {string} eventName
//    * @param {Function} callback
//    * @return {Object}
//    */
//   subscribe(eventName, callback) {
//      if(!this.events[eventName]){
//       this.events[eventName] = []
//      }
//     this.events[eventName].push(callback)      
//       return {
//           unsubscribe: () => {
//               let index = this.events[eventName].indexOf(callback);
//               if(index !== -1){
//               this.events[eventName].splice(index, 1);
//               }
//           }
//       };
//   }
  
//   /*
//    * @param {string} eventName
//    * @param {Array} args
//    * @return {Array}
//    */
//   emit(eventName, args = []) {
//       if(!this.events[eventName] || this.events[eventName].length === 0){
//           return []
//       }
//       const result = this.events[eventName].map(cb => cb(...args));
//       return result
//   }
// }


//  const emitter = new EventEmitter();

// //Subscribe to the onClick event with onClickCallback
//  function onClickCallback() { return 99 }
//  const sub = emitter.subscribe('onClick', onClickCallback);

// emitter.emit('onClick'); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit('onClick'); // []


// var ArrayWrapper = function(nums) {
//     this.nums = nums

// };

// /*
//  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function() {
//   return this.nums.reduce((a, b) => a + b, 0);
  
// }

// /*
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function() {
//     return `[${this.nums}]`;
// }


//  const obj1 = new ArrayWrapper([1,2]);
//  console.log(obj1);
 
//  const obj2 = new ArrayWrapper([3,4]);
//  obj1 + obj2; // 10
//  console.log(String(obj1)); // "[1,2]"
//  String(obj2); // "[3,4]"

// class Calculator {
    
//   /** 
//    * @param {number} value
//    */
//   constructor(value) {
//    this.value = value
//   }
  
//   /** 
//    * @param {number} value
//    * @return {Calculator}
//    */
//   add(value){
//     console.log(this);
    
//      this.value = this.value + value
//      return this
     
//   }
  
//   /*
//    * @param {number} value
//    * @return {Calculator}
//    */
//   subtract(value){
    
//     this.value = this.value - value
//     return this
//   }
  
//   /*
//    * @param {number} value
//    * @return {Calculator}
//    */  
//   multiply(value) {
//     this.value = this.value * value
//     return this
//   }
  
//   /* 
//    * @param {number} value
//    * @return {Calculator}
//    */
//   divide(value) {
//     if(value === 0){
//       throw new Error("Wrong")
//     }
//       this.value = this.value / value
//       return this
//   }
  
//   /*
//    * @param {number} value
//    * @return {Calculator}
//    */
//   power(value) {
//       this.value = this.value ** value
//       return this
//   }
  
//   /*
//    * @return {number}
//    */
//   getResult() {
//     return  this.value
//   }
// }
// let res1 = new Calculator(10).add(5).subtract(7).getResult()
// let res2 = new Calculator(10).multiply(5).power(2).getResult() // 10 + 5 - 7 = 8
// let res3 =new Calculator(20).divide(0).getResult()
// console.log("res1",res1);
// console.log("res2",res2);
// console.log("res3",res3);

// var createCounter = function(n) {
//   let count = n
//   return function() {
//       return count++
//   };
// };


// const counter = createCounter(10)
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12

// function memoize(fn) {
//      let result = {};
//   return function(...args) {
//     if(Array.isArray(args[0])){
//       console.log("array", args);
      
//      return args[0].map((val, ind)=>{
      
//       let key = JSON.stringify(val);
      
      
                
//                 if (result[key] === JSON.stringify(val)) {
                  
//                   result[key]
//                 } else {
                   
                    
//                     result[key]= fn(...val);
//                 }

             
//                 return result[key];
//       })
//     }else{
    
//     let key = JSON.stringify(args)
//      if(!result[key]) {
//       result[key] = fn(...args)
//      }
     
//       return result[key]
//     }

//   }
// }
// function memoize(fn) {
//   let cache = new Map();
// return function(...args) {
//   let currentCache = cache;

//       for (const arg of args) {
//           if (!currentCache.has(arg)) {
//               currentCache.set(arg, new Map());
//           }
//           currentCache = currentCache.get(arg);
//       }

//       if (!currentCache.has('result')) {
//           currentCache.set('result', fn(...args));
//       }

//       return currentCache.get('result');
// }
// }



//  let callCount = 0;
//  const memoizedFn = memoize(function (a, b) {
// 	 callCount += 1;
//    return a + b;
//  })
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(memoizedFn(3, 3)) // 5

//  console.log(memoizedFn([[{},{}],[{},{}],[{},{}]]))
//  console.log(callCount) 


// function memoize(fn) {
//   let cache = new Map();
// return function(...args) {
//   let currentCache = cache;

//       for (const arg of args) {
//           if (!currentCache.has(arg)) {
//               currentCache.set(arg, new Map());
//           }
//           currentCache = currentCache.get(arg);
//       }

//       if (!currentCache.has('result')) {
//           currentCache.set('result', fn(...args));
//       }

//       return currentCache.get('result');
// }
// }



//  let callCount = 0;
//  const memoizedFn = memoize(function (a, b) {
// 	 callCount += 1;
//    return a + b;
//  })
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(memoizedFn(3, 3)) // 5

//  console.log(memoizedFn([[{},{}],[{},{}],[{},{}]]))
//  console.log(callCount) 


// class Animal {};
// class Dog extends Animal {};
// var checkIfInstanceOf = function(obj, classFunction) {
//   let proto = Object.getPrototypeOf(obj);

 
//   while (proto !== null) {
//     if (proto === classFunction.prototype) {
//       return true; 
//     }
//     proto = Object.getPrototypeOf(proto);  
//   }
  
 
//   return false;
    
// };

// console.log(checkIfInstanceOf(new Date(), Date));
// console.log(checkIfInstanceOf(5, Number));
// console.log(checkIfInstanceOf(5n, BigInt));
// console.log(checkIfInstanceOf(new Dog(), Animal));


// function hello(arr){
//  let arr2 = []
//    arr.forEach((val)=>{
//     if(Array.isArray(val)){
//      arr2 = arr2.concat(hello(val))
//     }else{
//       arr2.push(val)
//     }
//    })
//   return arr2
   
// }
// console.log(hello([1, 2, 3, [4, 5, 6, [7, 8, 9]]]))
// const hello = new Array(1000);
// console.log(typeof hello);

// hello.fill(2);
// console.log(hello);

// Array.prototype.snail = function(rowsCount, colsCount) {
  
//   let arr = [];
//   for(let i = 0; i < rowsCount; i++){
//     arr.push([])
//   }
//   let left = 0;
//   let right = colsCount -1;
//   let top = 0;
//   let bottom = rowsCount -1;

//   let index = 0; // Use a separate index variable to track the position in the input array

//   while (left <= right && top <= bottom) {
//     // Traverse from left to right along the top row
//     for (let j = left; j <= right; j++) {
//       arr[top][j] = this[index++];
//     }
//     top++;

//     // Traverse down the right column
//     for (let j = top; j <= bottom; j++) {
//       arr[j][right] = this[index++];
//     }
//     right--;

//     // Traverse from right to left along the bottom row
//     if (top <= bottom) {
//       for (let j = right; j >= left; j--) {
//         arr[bottom][j] = this[index++];
//       }
//       bottom--;
//     }

//     // Traverse up the left column
//     if (left <= right) {
//       for (let j = bottom; j >= top; j--) {
//         arr[j][left] = this[index++];
//       }
//       left++;
//     }
//   }

//   return arr;
  
    
// }

// const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
// console.log(arr.snail(5,4)); // [[1,2,3,4]]

// let arr = [1, 2, 3, 4, 5, 6,7];

// arr.forEach((val)=>{
//  console.log(val);
//   if(val === 3){
//     return val
    
//   }
// })
// Array.prototype.snail = function(rowsCount, colsCount) {
  
//   let arr = [];
//   for(let i = 0; i < rowsCount; i++){
//     arr.push([])
//   }
//   let left = 0;
//   let right = colsCount -1;
//   let top = 0;
//   let bottom = rowsCount -1;

//   let index = 0; // Use a separate index variable to track the position in the input array

//   while (left <= right && top <= bottom) {
//     // Traverse from left to right along the top row
//     for (let j = left; j <= right; j++) {
//       arr[top][j] = this[index++];
//     }
//     top++;

//     // Traverse down the right column
//     for (let j = top; j <= bottom; j++) {
//       arr[j][right] = this[index++];
//     }
//     right--;

//     // Traverse from right to left along the bottom row
//     if (top <= bottom) {
//       for (let j = right; j >= left; j--) {
//         arr[bottom][j] = this[index++];
//       }
//       bottom--;
//     }

//     // Traverse up the left column
//     if (left <= right) {
//       for (let j = bottom; j >= top; j--) {
//         arr[j][left] = this[index++];
//       }
//       left++;
//     }
//   }

//   return arr;
  
    
// }

// var fibGenerator = function*() {
//   let a = 0, b = 1;
//   while(true){
//     yield a
//     [a,b] =  [b, a + b];
//   }
// };


//  const gen = fibGenerator();

 
//  console.log(gen.next().value); // 0
//  console.log(gen.next().value); // 1
//  console.log(gen.next().value); // 1
//  console.log(gen.next().value); // 1
//  console.log(gen.next().value); // 1
//  console.log(gen.next().value); // 1

// function fibonacci(n){
//   console.log(n);
  
//   let arr = [0, 1];
//   for(let i = 2; i < n; i++){
//     arr[i] = arr[i -1] + arr[i - 2]// [0,1,1,2,4]
//   }
//   return arr

// }
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7))

// Object.prototype.myCall = function(context, ...args){
//   context.createObj = this;
//  return context.createObj(...args)
// }
// Object.prototype.myApply = function (context, [...args]){
//   context.helloworld = this;
//   return context.helloworld(...args)
// }


// let obj = {
//   name:"Umair",
//   fnMethod:function(a, b, c){
//     console.log('Helllo '+ this.name + a, b);
    
//   }
// }
// let obj2 = {name:"Habib"};

// const check = obj.fnMethod.myCall(obj2, 12, 12);
// console.log(check);
// console.log("totle"+ "1000");

// var inorderTraversal = function*(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       yield* inorderTraversal(arr[i]);
//     } else {
//       yield arr[i];
//     }
//   }
    
    
// };


// const gen = inorderTraversal([1, [2, 3]]);
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
 
// var cancellable = async function(generator) {
//    console.log(generator.next(1));
   
// };


//  function* tasks() {
//    const val = yield new Promise(resolve => resolve(2 + 2));
//    yield new Promise(resolve => setTimeout(resolve, 100));
//    return val + 1;
//  }
//  const [cancel, promise] = cancellable(tasks());
//  console.log(cancel, promise);
 
// //  const [cancel, promise] = cancellable(tasks());
//  setTimeout(cancel, 50);
//  promise.catch(console.log); // logs "Cancelled" at t=50ms

// let arrData = ["Umair",'Faiz',"Ahmed","Suhaib","Zubair","Kashif","Aamir"];

// function findMiddleVal(arr){
//   let n = arr.length;
//   console.log(n);
//   if(n % 2 !== 0){
//     return arr[Math.floor(n/2)];
    
//   }else{
//     const middleOne = arr[Math.floor(n / 2) -1];
//     const middleTwo = arr[Math.floor(n/2)];
//     console.log(Math.floor(5/2));
//     return middleOne + " and " + middleTwo
    
//   }

  
// }

// console.log(findMiddleVal(arrData));

// const arrData = ["Umair","faiz","Kashif","hello"];

// function middleVal(arr){
//   let n = arr.length;
//   if(n % 2 !== 0){
//     return arr[Math.floor(n/2)]
//   }else{
//     let middleOne = arr[Math.floor(n/2) -1];
//     let middleTwo = arr[Math.floor(n/2)];
//     return middleOne + " and " + middleTwo
//   }
// }
// console.log(middleVal(arrData));

//ArrayWrapper.prototype.valueOf = function() {
  //   return this.nums.reduce((a, b) => a + b, 0);
    
  // }
  
  // /*
  //  * @return {string}
  //  */
  // ArrayWrapper.prototype.toString = function() {
  //     return `[${this.nums}]`;
  // }

// Function.prototype.callPolyfill = function(context, ...args) {
//   Object.defineProperty(context, 'fn', {
//     value: this,
//     enumerable: false,
//   });
  
//   return context.fn(...args);
 
// }


// function increment() { this.count++; return this.count; }
// let h = increment.callPolyfill({count: 1}); // 2
// console.log(h);

//Define Property of object

// let users = {
//   id: 1,
//   name:"Umair",
//   age: 23
// }
// console.log(users);
// Object.defineProperty(users, "name",{
//   value:"Ahmed",
//   writable:false,
//   enumerable:true
// })
// users.name = "Faiz"
// console.log(users);

//Swapping value 

// let a = 10;
// let b = 20;
// console.log("a value  " + a + " and b value is " + b);
// [a, b] = [b, a];
// console.log("Swapping a value is " + a + " and b value is " + b);

// let a = 10;
// let b = 20;
// console.log("a value  " + a + " and b value is " + b);
// let c = b;
//   b = a;
//   a = c
// console.log("Swapping a value is " + a + " and b value is " + b);

// let users = {
//   id: 1,
//   name:"Umair",
//   age: 23
// }
// console.log(users);
// Object.defineProperty(users, "name",{
//   value:"Ahmed",
//   writable:false,
//   enumerable:true
// })
// users.name = "Faiz"
// console.log(users);

//Number Pyramid

// function pyramidNumber(n){
//   console.log(n);
//   for(let i = 1; i <= n; i++){
//     let spaceContent = ""
//     for(let space = 1; space <=n - i; space++){
//       spaceContent = spaceContent + " "
//     }
//     for(let count = 1; count <= i; count++){
//       spaceContent = spaceContent+ count
//     }
//     for(let reverseCount= i-1; reverseCount >= 1; reverseCount--){
//       spaceContent = spaceContent + reverseCount
//     }
//     console.log(spaceContent);
    
    
//   }
  
// }
// console.log(pyramidNumber(10));
// const inputHour = document.getElementById("inputHour");
// const inputMin = document.getElementById("inputMin");
// const ulList = document.querySelector(".ulList");
// let date = new Date();
//   const options = {
//     hour: '2-digit', 
//     minute: '2-digit', 
//     hour12: true // This ensures 12-hour format with AM/PM
//   };
//   let time = date.toLocaleString("en-US", options);
//   if(ulList.innerHTML === time){
//     alert("Alarm is already set");
//   }
// function addText(){
  
//   ulList.innerHTML = inputHour.value + " : " + inputMin.value + " PM";
//   let val = inputHour.value + ":" + inputMin.value + " PM";
 
  
//}

// const val = "😂"
// if(0 === 1){
//   val = "😎"
// }

// function checkLeapYear(year) {
//   console.log(year % 4);
  
//   if(year % 4 === 0){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(checkLeapYear(2026));

// let c = {

// }
// const a = {
//   name: "Kashif"
// }
// const d = {
//   name:"Mehmood"
// }

// a[d] = {
//   name : "Umair"
// }
// a[c] = {
//   name:"Faiz"
// }

// console.log(a[d]);

//const arr = [1, 2, 3, ,4 ,5 ,6, 3, 4, 20, 30, 40, 20, 30, 40, 50, 50,50];

// function duplicateValue(data) {
//   let finalVal = [];
//   let valTwo = []
//   let duplicateLength = {}
// data.forEach(element => {
//  if(!finalVal.includes(element)){
//   finalVal.push(element)
//  }
//  if(finalVal.includes(element)){
//   if(!duplicateLength.hasOwnProperty(element)){
//     duplicateLength[element] = 1
//   }else{
//     duplicateLength[element]++
//   }
//  }
//  })
//  console.log(finalVal);
//  console.log(valTwo);
//  console.log("duplicate", duplicateLength);
 
 
 
 
// }
// console.log(duplicateValue(arr));

// function findDuplicate(data){
//   let result = data.filter((val, ind, self)=> {
//     console.log(self.indexOf(val));
    
//   });
//   console.log(result);
  
// }
// console.log(findDuplicate(arr));

// function sortArr(arr){
//   let n = arr.length;
//   for(let i = 0; i < n; i++){
//     for(let j = 0; j < n -i -1; j++){
//       if(arr[j] > arr[j + 1]){
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   console.log(arr);
  
// }
// console.log(sortArr([1, 3, 10, 20, 15, 13]));
// function sortArr(arr){
//   let n = arr.length;
//   for(let i = 0; i < n -1; i++){ //5
//     for(let j = 0; j < n - i - 1; j++){ 
//       if(arr[j] < arr[j + 1]){
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   console.log(arr);
  
// }
// console.log(sortArr([1, 3, 10, 20, 15, 13]));

// let arr = ["Umair", "Mehmood","Habib", "Kashif", "Faiz","Zubair"];

// function middleArrayVal(arrData){
//   let n = arrData.length;
//   if(n % 2 !== 0){
//     return arrData[Math.floor(n/2)]
//   }else{
//     let firstVal = arrData[Math.floor(n/3)];
//     let secondVal = arrData[Math.floor(n/2)];
//     return firstVal + " and "+ secondVal
    
//   }
// }
// console.log(middleArrayVal(arr));
// console.log(6/2);

// function sortedArr(arr){
//   let n = arr.length;
//   for(let i = 0; i < n; i++){
//    for(let j = 0; j < n -i -1; j++){
//     console.log("nested",arr[j]);
//     if(arr[j] > arr[j +1]){
//       [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//     }
//    }
//   }
//   console.log(arr);
  
// }
// console.log(sortedArr([1, 10, 12, 13, 6]));


// Function.prototype.myCall = function(context, ...args) {
//   context.fn = this;
//   return function(...args){
//      context.fn(...args)
//   }
// };

// let obj = {
//   name: "Umair",
//   mySelf: function(age){
//     console.log(`Hey this is ${this.name} and my age is ${age}`);
    
//   }
// }
// let obj2 = {
//   name: "Faiz"
// }
// let val = obj.mySelf.myCall(obj2);
// console.log(val(24));

// Debounce function implementation
// function debounce(func, wait) {
//   // Your code here
//   let timer;
//   return function(...args){
//     clearTimeout(timer)
//     timer= setTimeout(()=>{
//       func(...args)
//     }, wait)
//   }
  
// }

// // Test the debounce function
// const myFunc = () => {
//   console.log('Function executed!');
// };

// const debouncedFunc = debounce(myFunc, 2000);

// // This will call `myFunc` only once, 2 seconds after the last call
// debouncedFunc();
// debouncedFunc();
// debouncedFunc();


// function duplicateVal(arr){
//   let length = arr.length;
//   let otherVal = []
//   let duplicate=[]
//   arr.forEach(element => {
//     if(!otherVal.includes(element)){
//       otherVal.push(element)
//     }else{
//       duplicate.push(element)
//     }
//   });
//   console.log(duplicate);
  
// }

// console.log(duplicateVal([1, 2, 3, 3, 4, ,5 , 6, 5]));

// function duplicateVal(arr){
//   let length = arr.length;
//   let otherVal = []
//   let duplicate=[]
//   arr.forEach(element => {
//     if(!otherVal.includes(element)){
//       otherVal.push(element)
//     }else{
//       duplicate.push(element)
//     }
//   });
//   console.log(duplicate);
  
// }

// console.log(duplicateVal([1, 2, 3, 3, 4, ,5 , 6, 5]));
// let count = 0;
// function hello(){
//   count = 2
// }
// hello()
// console.log(count);

// function helloFunc(arr){
//   let arr2 =[]
//    arr.forEach(element => {
//     if(Array.isArray(element)){
//       arr2 = arr2.concat(helloFunc(element))
//     }else{
//       arr2.push(element)
//     }
//    });
//    return arr2

// }



// console.log(helloFunc([1, 2, 3, [4,[10, 10, 10], 5, 6, [7, 8, 9]], 10]));



// Function.prototype.myBind = function(context, ...args) {
//   // Your code here
//    context.fn = this;
//    return function( ...par){
//      context.fn(...par)
//    }
 
  
// }

// let obj = {
//   name: "Umair",  
//   mySelf: function(age){
//     console.log(`Hey this is ${this.name} and my age is ${age}`);
    
//   }
// }
// let obj2 = {
//   name: "Faiz"
// }
// let val = obj.mySelf.myBind(obj2);
// console.log(val(24));

// function helloPrac(str){
//   let arr = []
//   let temp = ''; 
//   let n = str.length;
//   for(let i= 0; i < n; i++){
//     if (!isNaN(str[i]) && str[i] !== ' ') { 
//       temp += str[i]; 
//     } else {
//       if (temp) {
//         arr.push(temp);
//         temp = ''; 
//       }
//     }
//   }
//   console.log(temp);
//   if(temp){
//     arr.push(temp)
//   }
  
//   console.log(arr);
  
  

// }
// console.log(helloPrac("a12245d34hj58"));
// function helloPrac(str){
//  let arr = [];
//  let temp = "";
//  let n = str.length;
//  for(let i =0; i < n; i++){
//   if(!isNaN(str[i]) && str[i] !== ' '){
//     temp += str[i]
//   }else{
//     if(temp){
//       arr.push(temp);
//       temp = "";
//     }
//   }
//  }
//  if(temp){
//   arr.push(temp)
//  }
//  return arr
  

// }
// console.log(helloPrac("a12245d34hj58"));


// let name = 'Kashif'

// function helloPrac(str){
//   let arr = []
//   let temp = ''
//   let n = str.length;
//   for(let i = 0; i < n; i++){
//     if(!isNaN(str[i]) && str[i] !== ' '){
//       temp += str[i]
//     }else{
//       if(temp){
//         arr.push(temp);
//         temp = ''
//       }
//     }
//   }
//   if(temp){
//     arr.push(temp)
//   }
//   return arr  

// }
//console.log(i);

// for(var i = 0; i < 5; i++){
//   setTimeout(()=>{
//     console.log(i);
//   }, 1000)
// }

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function helloPrac(arr){
//   let n = arr.length;
//   let sum = 0;
//   for(let i = 0; i < n; i++){
//     sum += arr[i]
//   }
//   return sum
// }
// console.log(helloPrac(arr));
// let modifiedVal = arr.map((val)=> val * 2);
// console.log(modifiedVal);

// let modifiedVal = arr.filter((val)=> val % 2 === 0);

// let obj = {
//   name: "Umair",
//   innerObj:{
//     name:"Zakat"
//   }
// }

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "Habib"
// obj2.innerObj.name = "Faiz"
// console.log(obj, obj2);

// let obj = {
//   name: "Umair",
//   innerObj: {
//     name: "Zakat"
//   }
// }
// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "Habib"
// obj2.innerObj.name = "Faiz"
// console.log(obj, obj2);
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function lastVal(data){
//   let modifiedVal = data.map((val)=>{
//     return [val[val.length -1]]
//   })
//   console.log(modifiedVal);
  
// }
// lastVal(arr);

// let arr = [1, 2, 3, 4, ,5 , 6, 7, 8, 9];

// function middleVal(data){
//  let n = data.length;
//  if(n % 2 !== 0){
//    return data[Math.floor(n/2)]
//  }else{
//     let firstVal = data[Math.floor(n/2) -1];
//     let secondVal = data[Math.floor(n/2)];
//     return firstVal + " and " + secondVal
//  }
// }
// middleVal(arr);

let name = "Umair"




















  








 








