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

// Getting stored tasks
app.get("/tasks", (req, res) => {
    const userID = req.body.userID;
    //db.query("SELECT * FROM tasks WHERE userID =" + userID, // TBC Login System. MySQL not liking search parameters?
    db.query("SELECT * FROM tasks", // SELECTS all, not by user alone
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.post("/edit", (req, res) => {

    const newTitle = req.body.newTitle;
    const newDescription = req.body.newDescription;
    const newDueDate = req.body.newDueDate;

    db.query("UPDATE tasks SET (title, description, dueDate) VALUES (?, ?, ?)",
    [newTitle, newDescription, newDueDate],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Value edited.")
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