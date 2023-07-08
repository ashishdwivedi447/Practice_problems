

// call : The call() method calls the function with a given this value and arguments provided individually. here using call() methods to invoke a function, this bounds to an object even when function is not a method of that object.
// printfullname  for understading I'm writing inside name object but in real I'll write this as a seprate function not releted any objects.
let name1={
    firstname:"Akshya",
    lastname:"Saini",
    // printfullname: function(){
    //     console.log(this.firstname+" "+this.lastname);  
    // }
}

// name1.printfullname();
// Now putting the printfullname function outside of any objects.

 let printfullname=function(hometown,state){
        console.log(this.firstname+" "+this.lastname +" "+"from"+" "+ hometown +" "+state);  
    }

let name2={
    firstname:"Sachin",
    lastname:"Tendulker",
}

// name1.printfullname.call(name2);   regular way  

// printfullname.call(name2,"Mumbai","Maharastra");

// apply: all logic are same but only instead of passing parametere individually we pass in an arrray.

// printfullname.apply(name2,["Mumbai","Maharastra"]);

// bind: bind method does not directly invoke the function instead of give a copy of that function which can be later invoked

let printMynamwe=printfullname.bind(name2,"Mumbai","Maharastra"); 
// "Mumbai","Maharastra" or ["Mumbai","Maharastra"]

// console.log(printMynamwe);   gives a copy of function printfullname;

printMynamwe()