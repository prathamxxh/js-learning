 //Assignment
   //Read about promises 
   //Try to create a promisified version of setTimeout
   //fetch 
   //fs.readfile  



   //Assignment
//    Promises


   setTimeout(function(){
        // console.log("hello from timeout")

   let promise = new Promise(function(resolve, reject) {
    console.log('hello from timeout')
    // resolve(56)
   });
   },2000) 

   let promise1 = new Promise(function(resolve, reject){
    console.log("hello1")
    reject("Error")
   })


//    Try to create a promisified version of setTimeout
let p2 = new Promise((resolve, reject) =>{
    // console.log("Promise is pending")
    setTimeout(() => {
        console.log("this is p2")
        resolve(true)
    },2000)
})



let p1 = new Promise((resolve,  reject) => {
    // console.log("This is for reject")
    
   
    setTimeout(() => {
        console.log("This is p1")
        reject(new Error("This is an error"))
},5000)
})
 //to catch the error
p1.catch((error) => {
    console.log("There is error!")
})
//to give the value
p2.then((value) =>{
    console.log(value)
})

fetch

let p5 = fetch("http://goweather.xyz/weather/Berlin")
p5.then((response) =>{
    console.log(response.status)
    console.log(response.ok)
    return response.json();
}).then((response) =>{
    console.log(response);
})
 

fs.readfile in node.js
// This method is used for asynchronously read the file while other events are not blocked or other events does not wait for compkletion of the file reading

const fs = require('fs')

fs.readFile('a.txt','utf-8',(err, data) => {
    if(err) {
        console.log('There is a error reading the file')
        return;
    }else{
        console.log("File Data:",data);
    }
})

Classes in js

class Rectangle{
    constructor(lenght, breadth, paint ){
        this.lenght = lenght;
        this.breadth = breadth;
        this.paint = paint;
    }

    area(){
        const area = this.lenght * this.breadth
        return area;
    }

    color() {
        console.log("the color is " + this.paint)
    }
}

const rect = new Rectangle(2,4,"Red")       // Instance of the rectangle class//or object of the rectangle class
const area = rect.area()
rect.color();
console.log(area);

// Date in js

const date = new Date();
console.log(date);
console.log(date.getMonth()); 


// object key pairs

let user = {
    name1:"Pratham",
    age: 21 
}
console.log(user.age)

//By using map class

const map = new Map();
map.set('name',"xyz")
map.set('age',23)

console.log(map.get('name'));   /// goal here is to understand that js gives you class already that can be directly used


// setTimeout

function main(){
    console.log("This is settimeout function")
}

setTimeout(main,2000);

// setTimeoutPromisified

function setTimeoutPromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve,ms))
    return p;
}

function callback(){
    console.log("This is promisified")
}

setTimeoutPromisified(3000).then(callback);


function waitfor3s(resolve){
    setTimeout(resolve,3000);
}

function main(){
    console.log("called after 3s")
}

waitfor3s(main);


function waitfor3s(resolve){
    setTimeout(resolve,3000)
}                                               //Here we defined a function wiatfor3s with a param as resolver

function setTimeoutPromisified(){
    return new Promise(waitfor3s)               //Here we promisified the above function using new promise
}

function main(){
    console.log("Wait for 3s")                  //This is the main function and goes in place of resolve 
}

setTimeoutPromisified().then(main);             //here because the waitfor3s is promisified we can use .then method

function random(){
   
}
let pro = new Promise(random);
function callback(){
    console.log("promise")
}
pro.then(callback);


function random(resolve){
    resolve();
}


const p = new Promise(random);              //new promise takes a para(function)i.e.random-- random is a function
                                            //random ka 1st para is resolve which is also a function
                                            // idhar aab jab last mai call karenge tab resolve = callback ho gayaga 
                                            //aisa q hora --
function callback(){
    console.log("hi there")
}
p.then(callback);


assignment
// Write a promisified version of fs.readfile,fs.writefile,claenfilr


Readfile

const r = require('fs');
const a =  r.readFileSync('a.txt','utf-8')
console.log(a)

// Now create a promisified version of this


// Done by youuuuuuuuuu!!!!!

const r = require('fs');

function readFilePromisified(resolve){
  const a =  r.readFile('a.txt','utf-8',(err,data) =>{
    if(err){
        console.log("Error reading the file")
        return;
    }else{
        console.log(data);
        resolve();
    }

  })
}
const promise = new Promise(readFilePromisified);

function afterRead(){
    console.log("hi here");
}

promise.then(afterRead);
console.log(promise)





//Write a promisified version of fs.writefile

// normal fs.write

const fs = require('fs');

const data = 'This is new data';

function dataChange(resolve){
     fs.writeFile('b.txt',data,'utf-8',(err) =>{
    if(err){
        console.log("Error writing the file")
        
    }
    console.log("Succesfull!")
    resolve();
})
}

const change = new Promise(dataChange)

function afterChange(){
    console.log("Data changed successfully!")
   
}

change.then(afterChange);


// Write a promisified version of cleanfile
// This means trime the extra spaces from start and end

// Normally clean file

// Read the content of the file 
// Trims extra spac3 from left and right
// writes it back to the file


// / Assihnment done by youuuuuuuu!!!!!
const fs = require('fs')

function readTrim(resolve){

fs.readFile('a.txt','utf-8',(err, data) =>{
    if(err){
        console.log('Error reading the file')
        return;
    }else{
        console.log("Read succesfull!")
       console.log(data)
        let result = data.trim();
      console.log(result)
     {
    fs.writeFile('a.txt',result,'utf-8',(err) =>{
        if(err){
            console.log("Error pushing back!")
        }
        resolve();
    })
}

    }

})
}


const reading = new Promise(readTrim)

function afterwriting(){
    console.log("File is cleaned")
}

reading.then(afterwriting);

// console.log(reading)






