import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [editableId, setEditableId] = useState([]);
  const [editedTask, setEditedTask] = useState([]);
  const [editedStatus, setEditedStatus] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [newStatus, setNewStatus] = useState([]);
  const [newDeadline, setNewDeadline] = useState([]);
  const [editedDeadline, setEditedDeadline] = useState([]);

  //fetch
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/getTodoList")
      .then((result) => {
        setTodoList(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   funct
  const toggleEditable = (id) => {
    const rowData = todoList.find((data) => data.id === id);

    if (rowData) {
      setEditableId(id);
      setEditedTask(rowData.task);
      setEditedStatus(rowData.status);
      setEditedDeadline(rowData.deadline || "");
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask || !newStatus || !newDeadline) {
      alert("All fields must be filled out");
      return;
    }

    axios
      .post("http://127.0.0.1:3001/addTodoList", {
        task: newTask,
        status: newStatus,
        deadline: newDeadline,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const saveEditedTask = (id) => {
    const editedData = {
      task: editedTask,
      status: editedStatus,
      deadline: editedDeadline,
    };

    if (!editedTask || !editedStatus || !editedDeadline) {
      alert("All fields must be filled out");
      return;
    }

    axios
      .post("http://127.0.0.1:3001/updateTodoList/" + id, editedData)
      .then((result) => {
        console.log(result);
        setEditableId(null);
        setEditedTask("");
        setEditedStatus("");
        setEditedDeadline(""); // Clear the edited deadline
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
}

export default Todo;
