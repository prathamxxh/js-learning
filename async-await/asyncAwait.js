//Async Await syntax in JS
//It provides a way in js to write async code in such a way that it looks and behave like 
//sync code so that it is easy to maintain and read

//same eg but in async and await

function timeoutPromisified(ms){
    return new Promise(reslove => setTimeout(reslove,ms))
}
async function solve() {
    await timeoutPromisified(1000);
    console.log('HI')
    await timeoutPromisified(3000);
    console.log('Hello')
    await timeoutPromisified(5000);
    console.log('Hello There')
}
solve();

//This is the cleanest way to write async code
//Under the hood it is using promises only


//Q1 (Easy) — Basic await

// Create:

// async function greetAfterDelay()
// Wait 2 seconds
// Then print "Hello after 2 seconds"

// 👉 Use your delay(ms) function

function before(ms){
    return new Promise(resolve => setTimeout(resolve,ms) )
}

async function greetAfterDelay() {
    await before(2000)
    console.log("Hello After 2 seconds")
}

greetAfterDelay();

//Q2 (Easy → Medium) — Sequential Tasks
// Using:
// function task(name, time)
// 👉 Write:
// async function runTasks()
// Run:
// Task A → Task B → Task C
// Ensure strict order

// 

function task(time){
    return new Promise((resolve)=> setTimeout(resolve,time))}



async function runTasks(){
    await task(1000);
    console.log('A')
    await task(2000);
    console.log('B')
    await task(3000)
    console.log('C')
}

runTasks();

//Q3 (Medium) — Parallel vs Sequential ⚡
// Create:
// async function run()
// Start 3 delays:
// 1 sec
// 2 sec
// 3 sec
// 👉 Run them in parallel (not one by one)
// 👉 Print: "All done" after all finish

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function run(){
    let d1 = delay(1000);
    let d2 = delay(2000);
    let d3 = delay(3000);
 
    await Promise.all([d1,d2,d3])
    console.log("All done")

}
run();

//Q4 (Medium) — Error Handling
// Create:
// function riskyTask()
// 50% resolve "Success"
// 50% reject "Error"
// 👉 Write:
// async function run()
// Call it using await
// Handle error using try/catch
// Print:
// "Got: Success" OR
// "Caught Error"

// 

const fs = require('fs');

function riskyTask(){
    return new Promise((resolve, reject) => {
        fs.readFile('a.txt','utf-8',function(err,data){
            if(err){
                reject("Error");
            }else{
                resolve("Success");
            }
        })
    })
}

async function run(){
    try{
        const result = await riskyTask();
        console.log("Got:", result);
    } catch(err){
        console.log("Caught Error");
    }
}

run();




// Q5 (Hard) — Timeout + Await 🔥

// Create:
// async function promiseWithTimeout(promise, ms)
// 👉 Behavior:
// If promise resolves before time → return result
// If it takes longer → throw "Timeout"
// 👉 Use:
// Promise.race()
// await


//This is how a Promise.race()is used
//It gives the result of the promise which finishs first

function delay(ms,name){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(name);
        }, ms);

    })
}

Promise.race([
    delay(1000,"A"),
    delay(2000,"B"),
    delay(3000,"C")

])
.then(console.log);

//First create two promise 
//THen wrap it in async 
//THen in async race it


function rejectPromise(ms){
    return new Promise((_,reject) =>{
        setTimeout(() =>{
            reject("timeout")
        },ms)
    })
}

function slowPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Done before")
        },4000)
    })
}

async function promiseWithTimeout(promise,ms){
    return await Promise.race([
        slowPromise,
        rejectPromise(ms)
    ])
}

promiseWithTimeout(slowPromise,1000)
.then(console.log)
.catch(console.log)
