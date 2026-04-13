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
