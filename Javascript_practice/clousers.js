
// function x(b){
//     let x=12;
//     function y(){
//         console.log(x,b);
//     }
//     return y;
// }
// let ans=x(13);
// ans();   output is 12,13.

// so here even after returning to y function x is vanished from call stack still y remebers the reference of variables and arguments of outer functions.