const path = require('path');

const express = require('express');
const app = express();

const PORT = 4444;

app.use(express.urlencoded({extended: true}));

//importing router modules for teachers and students
const teachersHandler = require('./routes/teachers');
app.use('/teachers',teachersHandler);

const studentsHandler = require('./routes/students');
app.use('/students',studentsHandler);


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})