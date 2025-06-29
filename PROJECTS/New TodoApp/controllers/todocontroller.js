// todocontroller.js will handle the logic for the todo app
// it will send back the response to the todo.js file 
// todo.js will handle the routes and send the response to the client side

const { v4: uuidv4 } = require('uuid');  // On calling uuidv4(),we get a unique id
// let todos = [];

const Todo = require('../database/script/database'); // importing the Todo class from database.js file



module.exports.getGetTodos = (req,res,next)=>{
    // res.send(todos);
    Todo.getTodos()
        .then((data)=>{
            res.send(data);  
        })
        .catch((err)=>{
            res.send(`Unable to fetch todos",${err}`);
        })
}



module.exports.postAddTodos = (req,res)=>{
    const {name } = req.body;
    Todo.addTodo(name)
        .then((msg)=>{
            console.log(msg);
            res.redirect('/gettodos');

        })
        .catch((err)=>{
            res.send(`Unable to add todo, ${err.message}`);
        })
}

// code when not using database.js file
// module.exports.postAddTodos = (req,res)=>{
//     const {name } = req.body;
//     console.log(name);
//     todos.push({
//         id : uuidv4(),
//         name
//     })
//     res.redirect('/gettodos');
// }




module.exports.postDeleteTodos = (req,res)=>{
    const {id} = req.body;
    Todo.deleteTodo(id)
        .then(()=>{
            res.redirect('/gettodos');
        })
        .catch((err)=>{
            res.send(`Unable to delete todo, ${err.message}`);
        })
}

// module.exports.postDeleteTodos = (req,res)=>{
//     const {id} = req.body;
//     todos = todos.filter((task)=>{
//         if(task.id == id) return false;  // false means task will not be included in the new array
//         return true;
//     })
//     res.redirect('/gettodos');
// }



module.exports.getIncreasePriority = (req,res)=>{
    const {id} =req.query;
    Todo.increasePriority(id)
        .then(()=>{
            res.redirect('/gettodos');
        })
        .catch((err)=>{
            res.send(`Unable to increase priority, ${err.message}`);
        })
}

// module.exports.getIncreasePriority = (req,res)=>{
//     const {id} =req.query;
//     console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx = i;  // storing the index of the task to be moved up
//         }
//     })
//     console.log(indx);

//     let temp = todos[indx];
//     todos[indx] = todos[indx-1];
//     todos[indx-1] = temp;
//     // swap the task with previous task
//     res.redirect('/gettodos');
// }



module.exports.getDecreasePriority = (req,res)=>{
    const {id} =req.query;
    Todo.decreasePriority(id)
    .then(()=>{
        res.redirect('/gettodos');
    })
    .catch((err)=>{
        res.send(`Unable to increase priority, ${err.message}`);
    })
}

// module.exports.getDecreasePriority = (req,res)=>{
//     const {id} =req.query;
//     console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx = i;  // storing the index of the task to be moved up
//         }
//     })
//     console.log(indx);

//     let temp = todos[indx];
//     todos[indx] = todos[indx+1];
//     todos[indx+1] = temp;
//     // swap the task with next task 
//     res.redirect('/gettodos');
// }



