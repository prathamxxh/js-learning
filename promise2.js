// Promise function clearly written

const { resolve } = require("node:dns");
const { after } = require("node:test");

//Read the file promisified

// const fs = require('fs');
//                                                                                 //  NO.2
// function readthefile(sendThevalueHere){                             //here,readthefile(resolve,reject)...sendthevaluehere=resolve
//     fs.readFile('a.txt','utf-8',function(err,data) {                // readthefile(sendthevaluehere=resolve,reject)
//        sendThevalueHere(data)
//     })
// }

// function readFile (){                                                       //. NO.1
//     return new Promise(readthefile)                                 // new Promise(resolve,reject){
// }                                                                   //  readthefile(resolve,reject)
//                                                                     //}...now the thread goes to the readthefile function up
// const p = readFile();

// function callback(constent){
//     console.log(constent)
// }
//                                                                             // NO.3
// p.then(callback)                                                    //now,what happens here is js sotores your function callback


//Write a promise class yourself to understand it better.                      //NO.4
                                                                    //now thte file finishes reading
                                                                    //senthefilehere = resolve
                                                                    //resolve(data)

                                                                    

// function abc(resolve){
//   resolve(console.log('hi'))
// }

// function xyz(){
//     return new Promise(abc)
// }

// const a = xyz();

// function qwe(){
//     console.log("After Promise is executed")
// }
// a.then(qwe)

// function doAsyncOP(resolve){
//     setTimeout(()=>{
        
//         resolve(console.log("Hi"));
//     },3000)
// }

// const p = new Promise(doAsyncOP)

// function callback(){
//     console.log('3s has passed')
// }
// p.then(callback);

// Very Very clean explation
//A prosimes expect a function that does the asynchronous task.
//Once the async task is complete calls the argument of that function,passing in the data obtain from async task
//The data will pass to the function that you define in .then



// Promises using promise made by you

class Promise1{
    constructor(fn){
       function afterDone(){
        this.resolve();
       }
       fn(afterDone);
    }
    then(callback){
        this.resolve = callback
    }
}


function xyz(resolve){
    setTimeout(() =>{
        console.log('Hi')
        resolve();
    },3000)
}

function abc(){
    return new Promise1(xyz)
}

const a = abc();
function callback(){
    console.log("After")
}

a.then(callback);