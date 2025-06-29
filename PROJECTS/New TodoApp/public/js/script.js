// Client side

// Axios is helping to retain the task list even after refreshing the page

const addtask = document.querySelector('#addtask');
const newtask = document.querySelector('#newTask');
const taskList = document.querySelector('.taskList');


function addToDom(todos) {
    taskList.innerText = '';
    todos.forEach(element => {
        // 1. create a new li element
        let li = document.createElement('li');

        //2. update the text inside this li element
        li.innerHTML = `
        <span class="taskname">${element.name}</span>
        <button atrid=${element.id} class="upBtn">⬆️</button>
        <button atrid=${element.id} class="dwnBtn">⬇️</button>
        <button atrid=${element.id} class="delBtn">❌</button>
        `; //atrid is a custom attribute to store the id of the task

        // 3. append this li element to the taskList
        taskList.appendChild(li);
    })
}


// taskk list remains same even after refreshing the page
axios.get('/gettodos')
    .then((res) => {
        let todos = res.data;
        addToDom(todos);      // adding existing tasks to the DOM
    })
    .catch((err) => {
        console.error(err);
    })


addtask.addEventListener('click', (ev) => {
    ev.preventDefault();         // to prevent the functionality of the form from being submitted

    axios.post('/addtodo',{
        name : newtask.value
    })
    .then((res)=>{
        let todos = res.data;
        newTask.value = '';  // clearing the input field after adding the task
        console.log(todos);
        addToDom(todos);      // adding new task to the DOM
    })
    .catch((err)=>{
        console.error(err);
    })

})


function deleteTodo(atrid){
    axios.post('/deletetodo', {id: atrid})
        .then((res) => {
            let todos = res.data;
            console
            addToDom(todos);      // removing the task from the DOM
        })
        .catch((err) => {
            console.error(err);
        }) 
}

taskList.addEventListener('click', (ev) => {
    // console.log(ev);
    // console.log(ev.target);
    let atrid = ev.target.getAttribute('atrid');
    let btnName = ev.target.className;

    // console.log(atrid); // atrid is the id of the task
    // console.log(btnName); // btnName is the class of the button clicked

    if (btnName == 'delBtn'){
        deleteTodo(atrid);
    }

    else if (btnName == 'upBtn' ){
        // Increase priority
        axios.get(`/increasepriority?id=${atrid}`)
        .then((res)=>{
            let todos = res.data;
            addToDom(todos);      // updating the task list in the DOM
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    else if (btnName == 'dwnBtn'){
        // Decrease priority
        axios.get(`/decreasepriority?id=${atrid}`)
        .then((res)=>{
            let todos = res.data;
            addToDom(todos);      // updating the task list in the DOM
        })
        .catch((err)=>{
            console.error(err);
        })
    }
})