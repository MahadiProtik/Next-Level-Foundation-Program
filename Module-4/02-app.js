
let taskInput = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

// console.log(taskInput, addBtn, taskList);

// let addBtnAlt = document.querySelector("#addBtn");

// console.log(addBtnAlt);

// addBtn.addEventListener("click", function(){
//     console.log("Hello Add Event Listenner");
    
// })

addBtn.addEventListener("click", ()=>{
    // console.log(taskInput.value);
    let li = document.createElement("li");

    // li.textContent = taskInput.value;
    // taskList.appendChild(li)

    let span = document.createElement("span");
    span.textContent = taskInput.value;

    let btnWrapper = document.createElement("span");

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✅"

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"

    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(span)
    li.appendChild(btnWrapper)

    taskList.appendChild(li)

    taskInput.value = "";

    
    
})

taskInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        console.log("Enter Pressed", taskInput.value);
        
    }
})

// let li = document.createElement("li");

// li.textContent = "Hello JavaScript";
// taskList.appendChild(li)

// console.log(li);
// console.log(taskList);
