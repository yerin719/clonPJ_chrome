const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const keyToDos = "toDos";

let toDos = [];

function delToDos(event){
    const delBtn = event.target;
    const delLi = delBtn.parentNode;
    toDoList.removeChild(delLi);
    const cleantoDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(delLi.id);
    });
    toDos = cleantoDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(keyToDos, JSON.stringify(toDos));
}

function paintTodo(cTodo){
    const liToDo = document.createElement("li");
    const spanToDo = document.createElement("span");
    const btnToDo = document.createElement("button");
    const idIndex = toDos.length +1;
    spanToDo.innerHTML = cTodo;
    btnToDo.innerText = "v";
    btnToDo.addEventListener("click",delToDos);
    liToDo.appendChild(btnToDo);
    liToDo.appendChild(spanToDo);
    liToDo.id = idIndex;
    toDoList.appendChild(liToDo);
    const toDoOj = {
        text : cTodo,
        id :idIndex
    }
    toDos.push(toDoOj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentToDo = toDoInput.value;
    paintTodo(currentToDo);
    toDoInput.value = "";
}

function getToDoList(){
    const allToDos = localStorage.getItem(keyToDos)
    if(allToDos !== null){
        const parsedAllToDos =JSON.parse(allToDos);
        parsedAllToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

function init(){
    getToDoList();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();