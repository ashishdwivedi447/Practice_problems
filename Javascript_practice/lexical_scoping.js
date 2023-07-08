//  scope chain: it is used to resolve the value of varaibles names in javascript.
//  lexical scoping: a function that is lexically within another functions get access to the scope of outer function.
//  (in simple words innerfunctions get access to their outer functions varaible but vice-versa not true).

//     var a="hello guys";

//     function first(){
//     var b="Howe are you"
//     second()
//     function second(){
//    var c="Myself Ashish";
//     console.log(a+b+c)      output: hello guys How are you Myself Ashish
//     }
//    }
//    first();
   //when first function gets called then global execution context created (memory creation + code execution context as we know we don't got deep on this)
   // most important point is that every function have their own execution context. one's functions varaible can't interfair another function's execution conetxt.
// coming to the point here a+b+c so a will look their own scope it didn't find then it goes to parent function scope there also didn't find
// then it goes to the global context and finds. Now for b same thing b is not availbe in their own scope but it's availble in parent function scope so thats ok. now everything is perfect.
// but twist is----->

//     var a="hello guys";

//     function first(){
//     var b="Howe are you"
//     second()
//     function second(){
//    var c="Myself Ashish";
//     console.log(a+b+c) 
//     three();     
//    }
// }

// function three(){
//     var d="HI Neeno";
//     console.log(a+b+c+d);  b is not defined.
// }
//    first();

   // so here when three function is gets called so a will look in their local scope but is's not avaliable to it don't look in other function scope as every fuinction have their seprate global execution context
   //now a will look in gobal execution context and it finds it and for b it look in their scope but it didn't find and in global scope also it didn't availble so it will throw error that b is not defined.

