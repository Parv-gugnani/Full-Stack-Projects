import "./App.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friends" },
    { text: "Have fun" },
  ]);

  return (
    <div className="App">
      <h1>This is a React App</h1>
    </div>
  );
}

export default App;
