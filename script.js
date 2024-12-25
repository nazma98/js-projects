const tasks = []

const addTaskElement = document.getElementById('addTask');
const taskInputElement = document.getElementById('taskInput');

const addTask = () => {
    const taskText = taskInputElement.value;
    if(!taskText){
        alert('You can\'t add empty task');
    }
    addTaskList(taskText);
}

const renderTasks = (tasks) => {
    tasks.forEach(task => {
        console.log(task);
        const taskList = document.createElement('li');
        taskList.innerText = task;
        return taskList;
    });
}

const addTaskList = (taskText) => {
    tasks.push(taskText);
    renderTasks(tasks);
}

addTaskElement.addEventListener('click', addTask);
