const express = require("express");
const moongoose = require("mongoose");
const cars = require("cars");
const TodoModel = require("./models/todolist");

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/todo");

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

app.get("/getTodoList", (req, res) => { 
    TodoModel.find({}) 
        .then((todoList) => res.json(todoList)) 
        .catch((err) => res.json(err)) 
}); 

app.post("./addToDoList", (req, res) => {
    TodoModel.create({
        task: req.body.task,
        status: req.body.status,
        deadline:req.body.deadline,
    }) 
    .then((todo)=> res.json(todo)).catch((err)=> res.json(err);
});

app.post("/updateTodoList", (req, res) => {
    const id = req.params.id;
    const updateData={
        task: req.body.task, 
        status: req.body.status, 
        deadline: req.body.deadline,  
    }
    TodoModel.findByIdAndUpdate(id, updateData) 
    .then((todo) => res.json(todo)) 
    .catch((err) => res.json(err)); 
})

app.delete('./deleteToDoList/:id', (req,res)=>{
    const id =req.params.id;
    TodoModel.findByIdAndDelete({_id:id})
    .then((todo)=>res.json(todo)).catch((err) =>{res.json(err)})
})

app.listen(3001,()=>{
    console.log(`server is running on http://localhost:3001/`);
})