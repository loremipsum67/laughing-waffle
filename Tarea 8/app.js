const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
loadData():

taskForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const task = taskInput.value;
    console.log(task);
    const li = document.createElement("li");
    li.textContent = task;
    li.append(  agregarBotonesSpan("X", "delete-btn"),
                agregarBotonesSpan("","edit-btn"));
    createData(task);
    taskInput.value = "";
    taskList.appendChild(li);
});

function agregarBotonesSpan (texto, nombreClase ){
    const btn = document.createElement("span");
    btn.textContent =texto;
    btn.classList.add(nombreClase);
    return btn;
}

taskList.addEventListener("click", (event)=>{
    if(event.target.closest(".delete-btn")){
        if(confirm("¿Estás seguro de borrar este elemento?")){
            event.target.closest(".delete-btn").parentElement.remove();
            deleteData(event.target.closest(".delete-btn").parentElement.firstChild.textContent);
        }
    }else if (event.target.closest(".edit-btn")){
        const txtEdit = prompt("Editar");
        event.target.closest(".edit-btn").parentElement.firstChild.textContent = txtEdit;
        update();
    }
});

document.querySelector('#toggle-theme-btn').addEventListener('click', (event)=>{
    document.body.classList.toggle("dark-theme");
});

function createData(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")|| "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
tasks.forEach((tarea)=>{

})
function update(){
    const li = document.querySelectorAll("li");
    const tasks = [];
    li.forEach((item)=>{
        tasks.push(item.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function deleteData(texto){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.forEach((tarea, index)=>{
        if(tarea === texto){
            tasks.splice(index, 1);
            return;
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}