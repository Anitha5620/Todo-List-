
    const taskinput = document.getElementById("taskinput");
    const tasklist = document.getElementById("tasklist");



    // function to add task:
    function addTask() {
        const tasktext = taskinput.value.trim();
        const li = document.createElement('li');
        if (tasktext === "") return;

        li.innerHTML = ` <span>${tasktext}</span>
                        <button onclick="doneTask(this)">Done</button>
                        <button onclick="editTask(this)">Edit</button>
                         <button onclick="deleteTask(this)">Delete</button>
                                   `
        tasklist.appendChild(li);
        taskinput.value = "";
    }
    // for creating done task:

    function doneTask(button) {
        const task = button.parentElement;
        task.classList.toggle("completed");
    }
    // for creating delete task:
    function deleteTask(button){
        const task = button.parentElement;
        task.remove();
    }
// for creating edit task:

    function editTask(button){
        const task = button.parentElement;
        const  span= task.querySelector("span");
        const newtext=prompt('edit your task',span.innerText);
        if(newtext!==""){
        span.innerText=newtext;
    }

    }