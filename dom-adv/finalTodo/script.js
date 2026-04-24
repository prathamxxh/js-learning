//

let todos = [];

let ctr = 0 

function add(){
    const task = document.querySelector("input").value
   if( task === "" ) return
  
    todos.push({
        title: task  
    })

    document.querySelector("input").value = "";
    render()
}

function deleteTask(index){
    todos.splice(index,1)
    render()
}

function editTask(index){
   const newTitle = prompt("Edit the Task:",todos[index].title)

   if(newTitle !== null && newTitle !== ""){
    todos[index].title = newTitle
    render();
   }
}

// console.log(todos)

function render(){
    document.querySelector("#taskdiv").innerHTML = "";

    for( let i = 0; i < todos.length; i++){
        let todo = todos[i];

        const tick = document.createElement("input")
        tick.type = 'checkbox'
        const h1 = document.createElement("h1")
        const btn1 = document.createElement("button")
        const btn2 = document.createElement("button")
        const div = document.createElement("div")

        h1.innerHTML = todo.title
        btn1.innerHTML = "Edit"
        btn2.innerHTML = "Delete"

        btn1.addEventListener("click",() => editTask(i) )
        btn2.addEventListener("click",() => deleteTask(i))
       
        div.appendChild(tick)
        div.appendChild(h1)
        div.appendChild(btn1)
        div.appendChild(btn2)

        const parent = document.querySelector("#taskdiv")
        parent.appendChild(div)
    }

}
