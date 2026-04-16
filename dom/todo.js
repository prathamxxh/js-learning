//Add tasks

let ctr = 1

function addToDo(){
    const read = document.querySelector('input');
    const value = read.value;
    // console.log(value)
    
    const divEl = document.createElement('div')
    divEl.setAttribute('id','todo-'+ctr)
    divEl.innerHTML = "<div>"+value+'</div><button onclick="deleteEl('+ctr+')">delete</button><button onclick="update('+ctr+')">Update</button>'
    document.querySelector('body').appendChild(divEl)
    ctr = ctr + 1
}

//Delete the element

function deleteEl(index){
   const element = document.querySelector('#todo-'+ index)
   element.parentNode.removeChild(element)
}

//Update the element

function update(index){
    const read1 = document.querySelector('#todo-'+index)
    const new1= document.querySelector('input')
    const newTask = new1.value

    read1.innerHTML = newTask
}
//This shows date when clicked, just for some extra functionalities
function todayDate(){
    const day = new Date();
    // console.log(day)
    const showDay = document.querySelector('h2')
    showDay.innerHTML = "<div>"+day+"</div>"
}
