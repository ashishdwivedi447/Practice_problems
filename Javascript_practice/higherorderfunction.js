// Higher order function ---> map,forEach, reduce , filter.
// the basic difference between map and forEach is that map returns new array without modifying the original array while foreach simply iterates but does not return anyting.
// Higherorder function takes callback as an argument which further takes three arguments element,array,index. 

// let arr=[1,2,3] ;

// let newarr=arr.map((e,i)=>e*2).map((e)=>e+2);

// console.log(newarr);

// let newarr1=arr.forEach((e,i)=>e*2);

// console.log(newarr1);   ---> undefined as expected.

// let arr2=[1,2,3,4,5,6];

// let ans=arr2.reduce((accumulator, currentValue)=>accumulator+currentValue,0).toFixed(3);
 // lets break it how it works --->
  // current value= every iteration of the array each element.
  // 0 --- is the initial value initiallly accumulator will be assigned to initial value which has been put and current value is the 1. updated accumulator is 1+0=1 this is for i=0;
  // i=1 ----> 1+2=3; accumulator =1 and  current value=2
  // i=2 ----->3+3=6; accumulator =3 and  current value=3
  // i=3 --->6+4=10;  accumulator =6 and  current value=4
  //i=4 ---->10+5=15; accumulator =10 and  current value=5
  //i=5 ---> 15+6=21; accumulator =15 and  current value=6
// if we don't provide the intial value then this the breakdown the internal process ---->
// The iterations in this example would be as follows:

// Iteration 1: accumulator = 1, currentValue = 2, resulting in accumulator = 3
// Iteration 2: accumulator = 3, currentValue = 3, resulting in accumulator = 6
// Iteration 3: accumulator = 6, currentValue = 4, resulting in accumulator = 10
// Iteration 4: accumulator = 10, currentValue = 5, resulting in accumulator = 15
// Iteration 5: accumulator = 15, currentValue = 6, resulting in accumulator = 21.
// Finally, the value of accumulator (which holds the ans) is returned as the result of the reduction process, and it gets assigned to the variable ans. In this case, the output would be 21.
// let arr2=[1,2,3,4,5,6];

// let ans=arr2.reduce((accumulator, currentValue)=>accumulator+currentValue,0).toFixed(3);
// 
// one most important thing is that chaining operation is applied to map and filter and technically I can't say that in reduse chaining operation is applied but after getting the single value if we want that we have to get upto 2 decimal then chaining is used.
// let's check this...
// console.log(ans);
// let filter=arr2.filter((a,i)=>a%2===0).map((e,i)=>e+2);
// console.log(filter);
//test



