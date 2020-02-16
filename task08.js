const inputWithTask = document.getElementById('taskInput');
const buttonToAddTask = document.getElementById('addTaskButton');
const listWithTask = document.getElementById('taskList');
const buttonToRemoveDoneTasks= document.getElementById('removeFinishedTaskButton');
const counterTasks = document.getElementById('.counter');

let counter = 0;

buttonToAddTask.addEventListener('click', function () {

    if (inputWithTask.value.length < 5) {
        console.log('Za mało znaków')
    }else if (inputWithTask.value.length > 100) {
        console.log('Za dużo znaków')
    }else{
        const newTask = document.createElement('li');
        listWithTask.appendChild(newTask);

        const mewHeadling = document.createElement('h1');
        mewHeadling.innerText = inputWithTask.value;
        newTask.appendChild(mewHeadling);

        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Delete';
        buttonDelete.classList.add('Delete');
        newTask.appendChild(buttonDelete);

        const buttonComplete = document.createElement('button');
        buttonComplete.innerText = 'Complete';
        buttonComplete.classList.add('Complete');
        newTask.appendChild(buttonComplete);

        counter += 1;
        counterTasks.innerText = 'Number of tasks: ' + counter;

        buttonComplete.addEventListener('click',function () {
            if (newTask.classList.contains('taskDone')) {
                newTask.classList.remove('taskDone');
            }else{
                newTask.classList.add('taskDone');
            }
        })
    }

})