

if(true){
 
    var c=12;
    let x=10;
    const d=10;
    console.log(x)  //10
    console.log(c); // 12
    console.log(d);  //10
}

 console.log(x) // it will throw a reference error that x is not defined because we are trying to access the x but it is not available because block scope gets disappear. and code will be rejected upfront. 
console.log(c)
console.log(d); 