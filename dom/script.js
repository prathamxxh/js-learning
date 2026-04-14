//First of all think what are the functions of todo app
//First it takes the input,then it adds to the list then we can also delete the task
//Show the list,Add task and delete the task this are the simple functions of the todo app
//In order to add the task first we have to read the input, then add it to the task list 


//Here we have used querySelector
//It is used to get a specific element
//Where as querySelectorAll is used to get multiple elements of the same type
//querySelector and querySelectorAll are enough we can target all the elements by using this 
//There is also getElementbyID by we can perform the same thing by eg:document.querySelector("#todo1")
//Instead of: document.getElementById("todo1")

//Function to read the task from the input tab
function addToDo(){
const inputElement =document.querySelector("input");
const value = inputElement.value;
console.log(value);
}

//Updating elements

let ctr = 0;
function callback(){
   document.querySelector(".a1").innerHTML = ctr
    ctr = ctr + 1;
}
setInterval(callback,1000);


//Deleting Elements

function deleteElement(index){
    const element = document.querySelector("#todo"+index)
    document.getElementById("todoparent").removeChild(element)
}

// Simple way to understnad delete elemnet

function deleteElement(){
    const deleteEle = document.getElementById("todo1");
    const parentEle = deleteEle.parentNode
    parentEle.removeChild(deleteEle)
}

//Updating a element

function updatingEle(){
    const ele = document.querySelector("#todo2");
    ele.innerHTML = "Updated!"
}

