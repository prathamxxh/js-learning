//Find the sum of Two numbers

function sum(a,b){
    let total = a + b ;
    console.log(total)
}
sum(6,3);

// Find the sum from 1 to a number

function sum(n){
    let ans = 0
    for(i = 1;i <= n; i++){
     ans = ans + i    
    }
   return ans;
}
// let ans =sum(2)
console.log(ans);

// I/O operaqtions

const fs = require("fs");

const content = fs.readFileSync("a.txt","utf-8")
console.log(content); //asyns code

const content1 = fs.readFileSync("b.txt","utf-8")
console.log(content1);

// Functional arguments

function sum(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}

    function doOperations(a,b,op){                  // op here is just a name uded to represnt a parameter/argument and 
                                                    // in that argument we can pass another function as argument this is called
                                                    // functional arguments
    let val = op(a,b);
    return val;
}
    const ans = doOperations(2,2,sum)
console.log(ans);



// asynchronous function

const fsa = require("fs");

function print(err,data){
    console.log(data);
}

fsa.readFile("a.txt","utf-8",print)
fsa.readFile("b.txt","utf-8",print)

console.log("Done!")

const fsa = require('fs');

function print(err,data){
    if(err){
        console.log("File not found!")
    }
    else{
        console.log(data)
    }
}

fsa.readFile("b.txt","utf-8",print)
console.log("done!")


// setTimeout Function

console.log("hi");

function timeout(){
    console.log("click the button")
}

setTimeout(timeout,10000);                      // setTimeout is available globally thats y dont need to import anything
console.log("welcome to the loop");

let c = 0
    for(i = 0;i < 100000;i++){
        c = c + i;
    }
    console.log(c)                  // now here according to the code click the button should be loged first
                                    // but it does not get loged first because when the js gets to for loop the 
                                    // thread gets busy in the calculation (cpu intensive operation and complete it first)
                                    // then it goes to settimeout(i/o intensive operation) 
                                    // First the cpu intensive tasks will be completed and then after that other tasks 
