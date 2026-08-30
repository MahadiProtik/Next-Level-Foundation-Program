let taskInput = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

let tasks = [];
let taskIdCounter = 1;

function render(){
    taskList.innerHTML = "";

    tasks.forEach((task)=>{
        let li = document.createElement("li");
        li.classList.add("task-item");

        let span = document.createElement("span");
        span.classList.add("task-text");
        span.textContent = `Task: ${task.text} completed: ${task.complete}`;

        let btnWrapper = document.createElement("div");
        btnWrapper.classList.add("task-buttons");

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✅"

        completeBtn.addEventListener("click",()=>{
            cometeTask(task.id)
        })

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click",()=>{
            deleteTask(task.id);
        })

        btnWrapper.appendChild(completeBtn)
        btnWrapper.appendChild(deleteButton)

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li)
    })
}

function addTask(){
    let taskText = taskInput.value.trim();

    if(taskText == ""){
        return;
    }
    let newTask = {
        id: taskIdCounter++,
        text: taskText,
        complete: false
    }

    tasks.push(newTask);
    console.log(tasks);
    
    taskInput.value = "";
    render();

}

addBtn.addEventListener("click",addTask)

function cometeTask(id){
    let task = tasks.find((task) => task.id == id);
    task.complete = !task.complete;
    // task.classList.add("complete");
    render();
}

function deleteTask(id){
    tasks = tasks.filter((task)=>task.id != id);
    render();
}