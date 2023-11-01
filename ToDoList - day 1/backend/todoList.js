const moongoose = require("mongoose");

//
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
  },
});

//
const todoList = moongoose.model("todo", todoSchema);

module.exports = todoList;
