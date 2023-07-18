
// Currying is a technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument.
//In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth until all arguments have been fulfilled.
//Why it’s useful?
// 1. currying is usefull in partial application--> Currying allows you to create new functions by fixing some of the arguments of an existing function. This is known as partial application. It enables you to reuse and specialize functions, creating more flexible and reusable code.
   
// see partial aplication demonstration--->
 function add(a,b){
    return a+b;
 }
//  console.log(add(2,3));   this is normal javascript one .
// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// const res=add(2);
// console.log(res(3));     this is partial applications.


// function sum(a){
//     return function(b){
//         return function(c){
//           return function(d){
//             console.log(a+b+c+d);
//           }
//         }
//     }
// }

// sum(1)(2)(3)(4);

// above function code can be written as arrow function as well.

// const sum=(a)=>(b)=>(c)=>(d)=>a+b+c+d;

// console.log(sum(1)(2)(3)(4))

// other Real scenerio appliactions --->

// const userobj={
//     name:"satish",
//     age:27
// }

// function userinfo(obj){
//     return function(b){
//         return obj[b];
//     }
// }

// let res=userinfo(userobj);
// console.log(res);              this is Real life example.
// console.log(res("name"));  satish
 // console.log(res("age"));

//  Infinite currrying --->

//  function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
//  }

//  console.log(add(3)(4)(4)());