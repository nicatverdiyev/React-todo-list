import React, { useState } from "react";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <Form setTodos={setTodos} todos={todos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
