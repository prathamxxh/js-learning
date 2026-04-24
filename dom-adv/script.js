
let ctr = 1;
// function addTodo(){
//     const read = document.querySelector("input");
//     const value = read.value
//     // console.log(value)

//     const newelement = document.createElement("div")
//     newelement.setAttribute("id","todo-"+ctr)
//     newelement.innerHTML = "div"+value+'<button onclick="deleteTodo('+ctr+')">Delete</button><button onclick="editTodo('+ctr+')">Edit</button>'

//     const parent = document.querySelector("#parentDiv")
//     parent.appendChild(newelement)
//     ctr = ctr + 1;

// }

// function deleteTodo(index){
//     const deleteElement = document.querySelector("#todo-"+index)

//     const parent  = document.querySelector("#parentDiv")

//     parent.removeChild(deleteElement)
    
// }

//Cleaner way to create the todo function
//first appen span and button to the div
//then append the div to the body

// function addTodo(){
//     const read = document.querySelector("input")
//     const value = read.value
//     //
//     const spanEl = document.createElement("span");
//     const buttonEl = document.createElement("button");

//     spanEl.innerHTML = value;
//     buttonEl.innerHTML = "Delete";
//     //

//     const divEl = document.createElement("div");
//     divEl.appendChild(spanEl);
//     divEl.appendChild(buttonEl);
//     //
//     const parent = document.querySelector("#parentDiv")
//     parent.appendChild(divEl)



// }

//AddTodo using the state and component type code


//Code written by you:

let todos = [];

function addTodo(){
    todos.push({
        title: document.querySelector("input").value  
    })
    render();
}

// console.log(todos)

//what we have done here is ,1st created a array that takes takes the input of the user
//and stores it

function deleteTodo(index){
    todos.splice(index , 1)
   render()
}

function render(){
    document.querySelector("#taskDiv").innerHTML = "";

    for(let i = 0; i < todos.length; i++){

        const todo = todos[i];

        const h1 = document.createElement("h1");
        const btn = document.createElement("button");
        const div = document.createElement("div");

        h1.innerHTML = todo.title;
        btn.innerHTML = "Delete";

        // ✅ Use ONLY ONE event listener
        btn.addEventListener("click", () => deleteTodo(i));

        div.appendChild(h1);
        div.appendChild(btn);

        document.querySelector("#taskDiv").appendChild(div);
    }
}

function deleteFirstTodo(){
    todos.splice(0,1)
    render();
}

function deletelastTodo(){
    todos.splice(todos.length-1,1)
    render()
}

///now make the delete function with appended div functional

