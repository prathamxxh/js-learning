// Create a promisisfid version of settimeout

function setTimeoutPromisified(ms){
    return new  Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

function callback(){
    console.log("hi")
}
setTimeoutPromisified(1000).then(callback)

// CAllback hell
//Log hi after 1 sec
//log hello after 3 sec
//log hello there after 5 sec

setTimeout(()=>{
    console.log('HI')
    setTimeout(()=>{
        console.log('Hello')
        setTimeout(()=>{
            console.log("Hello there")
        },5000)
    },3000)
},1000)

//This can be overcome by promise chaining

function timeoutPromisified(ms){
    return new Promise((resolve) =>{
        setTimeout(resolve,ms)
    })
}


timeoutPromisified(1000).then(()=>{
    console.log('hi')
    return timeoutPromisified(3000)
}).then(()=>{
    console.log('Hello')
    return timeoutPromisified(5000)
}).then(()=>{
    console.log('Hello there')
})
//this is much better syntax as compared to callback hell
//it is easy to read and clean to look at and easy to understand
