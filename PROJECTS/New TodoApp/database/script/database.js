// database folder has the database.js file & data.json 
// todocontroller.js will interact with the database.js file 
// & database.js file will interact with the data.json file to get the stored data

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..','data.json');

class Todo {

    static getTodos(){
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath, 
                {
                    encoding:'utf8'
                },
                (err, data) => {
                    data = JSON.parse(data); // convert string to object
                if (err) return reject(err) 
                resolve(data)
            });
        });
    }

    static addTodo(name){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                filePath,
                {encoding: 'utf8'},
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data); 

                    let newTask = {
                        id: uuidv4(), 
                        name: name
                    }
                    data.unshift(newTask); // add new task at the beginning of the array

                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task added successfully");
                        }
                    );
                }
            )
        })
    }

    static deleteTodo(id){
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {encoding: 'utf8'},
                (err, data) => {
                    if(err) return reject(err);
                    data = JSON.parse(data);

                    let newData = data.filter(item=> item.id !== id); 
                    
                    fs.writeFile(
                        filePath,
                        JSON.stringify(newData),
                        (err) => {
                            if(err) return reject(err);
                            resolve("Task deleted successfully");
                        }
                    )
                }
            )
        })
    }

    static increasePriority(id){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                filePath,
                {encoding: 'utf8'},
                (err, data) => {
                    if(err) return reject(err);

                    let todos = JSON.parse(data) 

                    let indx;
                    todos.forEach((e,i)=>{
                        if(e.id == id){
                            indx = i;  // storing the index of the task to be moved up
                        }
                    })
                    console.log(indx);
                    let temp = todos[indx];
                    todos[indx] = todos[indx-1];
                    todos[indx-1] = temp;
    
                    fs.writeFile(
                        filePath,
                        JSON.stringify(todos),
                        (err) => {
                            if(err) return reject(err);
                            resolve("Task priority increased");
                        }
                    )
                }
            )
        })
    }

    static decreasePriority(id){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                filePath,
                {encoding: 'utf8'},
                (err, data) => {
                    if(err) return reject(err);

                    let todos = JSON.parse(data) 

                    let indx;
                    todos.forEach((e,i)=>{
                        if(e.id == id){
                            indx = i;  
                        }
                    })
                    console.log(indx);
                    
                    let temp = todos[indx];
                    todos[indx] = todos[indx+1];
                    todos[indx+1] = temp;
    
                    fs.writeFile(
                        filePath,
                        JSON.stringify(todos),
                        (err) => {
                            if(err) return reject(err);
                            resolve("Task priority increased");
                        }
                    )
                }
            )
        }
    )}
}

module.exports = Todo;