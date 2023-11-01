const express = require("express");
const moongoose = require("mongoose");
const cars = require("cars");
const TodoModel = require("./models/todolist");

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/todo");
