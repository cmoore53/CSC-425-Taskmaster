const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLRootPass1776{}|123",
    database: "taskmaster"
});

// Adding a Task
app.post("/create", (req, res) => {

    //console.log(req.body);
    // creating / adding task
    const title = req.body.title;
    const description = req.body.description;
    const dueDate = req.body.dueDate;
    const userID = req.body.userID;

    db.query("INSERT INTO tasks (title, description, dueDate, userID) VALUES (?, ?, ?, ?)", 
    [title, description, dueDate, userID], 
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted.")
        }
    });
});

// Editing a Task
app.post("/update", (req, res) => {

    //console.log(req.body);

    // editing a task 
    const newTitle = req.body.newTitle;
    const newDescription = req.body.newDescription;
    const newDueDate = new Date(req.body.newDueDate);
    const taskID = req.body.taskID;

    const editStatement =   "UPDATE tasks SET title = ?, description = ?, dueDate = ? WHERE taskID = ?";
    const editedValues = [newTitle, newDescription, newDueDate, taskID];

    db.query(editStatement, editedValues,
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Value(s) edited.")
        }
    });
});

// Getting stored tasks
app.post("/tasks", (req, res) => {
    const userID = req.body.userID;
    const values = [userID, 0];

    db.query("SELECT * FROM tasks WHERE (userID = ? AND softDelete = ?)", // TBC Login System. MySQL not liking search parameters?
        values,
    //db.query("SELECT * FROM tasks", // SELECTS all, not by user alone
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});


app.post("/login", (req, res) => {
    const username = req.body.user.username;
    const password = req.body.user.password;
    const values = [username, password];

    db.query("SELECT userID FROM tasks WHERE (username = ? AND password = ?)", // TBC Login System. MySQL not liking search parameters?
            values,
        //db.query("SELECT * FROM tasks", // SELECTS all, not by user alone
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
});

app.post("/delete", (req, res) => {

    // [soft] deleting a task 
    const softDelete = 1; //BOOLEAN TRUE => TINYINT 1 in MySQL
    const taskID = req.body.taskID;

    const editStatement =   "UPDATE tasks SET softDelete = ? WHERE taskID = ?";
    const editedValues = [softDelete, taskID];

    db.query(editStatement, editedValues,
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Task deleted.")
        }
    });
});

/*
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

    app.get('/', (req, res) => {
        
        const sqlInsert = "INSERT INTO tasks (taskName, taskDesc, taskDate, userID) VALUES ('testing', 'does this work?', '11/3/2023', 1);"
        db.query(sqlInsert, (err, result) => {
            res.send("checking ...");
        })
    });


});
*/



app.listen(3001, () => {
    console.log("running on port 3001");
});