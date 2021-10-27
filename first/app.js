const todoInput = document.querySelector("#text");
const todobtn = document.querySelector("#btn");
const todoList = document.querySelector(".todo-list");
   

todobtn.addEventListener('click',addTodo);

todoList.addEventListener('click',deletecheck);



function addTodo(event){

    event.preventDefault();
//  console.log("hello")
    //to do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    const   newTodo = document.createElement("li");
    newTodo.innerText  = todoInput.value;
    todoInput.value ="";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    const   completdBtn = document.createElement("button");
    completdBtn.innerHTML  = "<i class='fas fa-check'></i>";
    completdBtn.classList.add('completad-btn');
    todoDiv.appendChild(completdBtn);


    const   trashBtn = document.createElement("button");
    trashBtn.value = "trash";
    trashBtn.innerHTML  = "<i class='fas fa-trash'></i>";
    trashBtn.classList.add('trashBtn-btn');
    todoDiv.appendChild(trashBtn);


todoList.appendChild(todoDiv);
}


function deletecheck(e){
const item = e.target;
if (item.classList[0]=== "trashBtn-btn"){
    const todo =item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend',function(){
        todo.remove();
    })
}
if (item.classList[0]=== "completad-btn"){
    const todo =item.parentElement;
    todo.classList.toggle("complitad");
    
}
}
